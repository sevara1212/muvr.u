
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import RoomCard from "@/components/RoomCard";
import { Room } from "@/types";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllRooms, getJoinedRooms } from "@/services/roomService";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [upcomingRooms, setUpcomingRooms] = useState<Room[]>([]);
  const [joinedRooms, setJoinedRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Get all upcoming rooms
        const allRooms = await getAllRooms();
        const now = new Date();
        const upcoming = allRooms
          .filter(room => new Date(room.dateTime) > now)
          .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
        
        setUpcomingRooms(upcoming);
        
        // Get user's joined rooms if logged in
        if (currentUser) {
          const userJoined = await getJoinedRooms(currentUser.id);
          setJoinedRooms(userJoined);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
        toast.error("Failed to load activities");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRooms();
  }, [currentUser]);
  
  // Refresh rooms after join/leave actions
  const handleRoomAction = async () => {
    setLoading(true);
    try {
      // Get all upcoming rooms
      const allRooms = await getAllRooms();
      const now = new Date();
      const upcoming = allRooms
        .filter(room => new Date(room.dateTime) > now)
        .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
      
      setUpcomingRooms(upcoming);
      
      // Get user's joined rooms if logged in
      if (currentUser) {
        const userJoined = await getJoinedRooms(currentUser.id);
        setJoinedRooms(userJoined);
      }
    } catch (error) {
      console.error("Error refreshing activities:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center mb-4">
        <ArrowLeft 
          size={20} 
          className="mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold">Activities</h1>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="joined">My Activities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              <p>Loading activities...</p>
            </div>
          ) : upcomingRooms.length > 0 ? (
            upcomingRooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                onActionComplete={handleRoomAction}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No upcoming activities available.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="joined" className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              <p>Loading activities...</p>
            </div>
          ) : !currentUser ? (
            <div className="text-center py-8 text-gray-500">
              <p>You need to log in to see your activities.</p>
              <button 
                onClick={() => navigate('/login')}
                className="text-fitness-primary mt-2"
              >
                Log in
              </button>
            </div>
          ) : joinedRooms.length > 0 ? (
            joinedRooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                onActionComplete={handleRoomAction}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>You haven't joined any activities yet.</p>
              <button 
                onClick={() => navigate('/explore')}
                className="text-fitness-primary mt-2"
              >
                Find activities to join
              </button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default ActivitiesPage;
