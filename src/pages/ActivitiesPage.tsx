
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import RoomCard from "@/components/RoomCard";
import { Room } from "@/types";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllRooms, getJoinedRooms, updateUserSportType, getRoomsBySport } from "@/services/roomService";
import { SportType } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Gender } from "@/types";

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [joinedRooms, setJoinedRooms] = useState<Room[]>([]);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [sportLoading, setSportLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        let fetchedRooms: Room[] = [];
        
        if (selectedSport && selectedSport !== 'All') {
          fetchedRooms = await getRoomsBySport(selectedSport);
        } else {
          fetchedRooms = await getAllRooms();
        }
        
        setAllRooms(fetchedRooms);
        
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
  }, [currentUser, selectedSport]);
  
  // Get filtered upcoming rooms
  const getFilteredUpcomingRooms = () => {
    const now = new Date();
    return allRooms
      .filter(room => {
        // Filter by date (upcoming only)
        const isUpcoming = new Date(room.dateTime) > now;
        
        // Filter by gender preference if user is logged in
        let genderMatch = true;
        if (currentUser && room.genderPreference && room.genderPreference !== Gender.Both) {
          if (currentUser.gender && currentUser.gender !== room.genderPreference) {
            genderMatch = false;
          }
        }
        
        // Filter by age range if user is logged in
        let ageMatch = true;
        if (currentUser && room.ageRange && currentUser.age) {
          const userAge = currentUser.age;
          const { min, max } = room.ageRange;
          if (userAge < min || userAge > max) {
            ageMatch = false;
          }
        }
        
        return isUpcoming && genderMatch && ageMatch;
      })
      .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  };
  
  // Get filtered joined rooms
  const getFilteredJoinedRooms = () => {
    if (!currentUser) return [];
    
    const now = new Date();
    return joinedRooms
      .filter(room => {
        // Filter by date (upcoming only)
        const isUpcoming = new Date(room.dateTime) > now;
        
        // Filter by gender preference
        let genderMatch = true;
        if (room.genderPreference && room.genderPreference !== Gender.Both) {
          if (currentUser.gender && currentUser.gender !== room.genderPreference) {
            genderMatch = false;
          }
        }
        
        // Filter by age range
        let ageMatch = true;
        if (room.ageRange && currentUser.age) {
          const userAge = currentUser.age;
          const { min, max } = room.ageRange;
          if (userAge < min || userAge > max) {
            ageMatch = false;
          }
        }
        
        return isUpcoming && genderMatch && ageMatch;
      })
      .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  };
  
  // Refresh rooms after join/leave actions
  const handleRoomAction = async () => {
    setLoading(true);
    try {
      let fetchedRooms: Room[] = [];
      
      if (selectedSport && selectedSport !== 'All') {
        fetchedRooms = await getRoomsBySport(selectedSport);
      } else {
        fetchedRooms = await getAllRooms();
      }
      
      setAllRooms(fetchedRooms);
      
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
  
  // Sport type selector handler
  const handleSportSelect = async (sport: string) => {
    setSportLoading(true);
    setSelectedSport(sport);
    if (currentUser) {
      try {
        await updateUserSportType(currentUser.id, sport);
      } catch (e) {
        toast.error("Failed to update your sport preference");
      }
    }
    setSportLoading(false);
  };
  
  const upcomingRooms = getFilteredUpcomingRooms();
  const filteredJoinedRooms = getFilteredJoinedRooms();
  
  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center mb-4">
        <ArrowLeft 
          size={20} 
          className="mr-3 cursor-pointer text-white-force" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold text-white-force">Activities</h1>
      </div>

      {/* Sport Type Selector */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-white-force">Filter by Sport</h2>
        <div className="flex flex-wrap gap-2 items-center">
          <button
            className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
              selectedSport === null || selectedSport === 'All' 
                ? 'bg-white text-[#35179d] border-white shadow-lg' 
                : 'bg-transparent text-white border-white/50 hover:border-white'
            }`}
            onClick={() => handleSportSelect('All')}
            disabled={sportLoading}
          >
            All Sports
          </button>
          {Object.values(SportType).map((sport) => (
            <button
              key={sport}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                selectedSport === sport 
                  ? 'bg-white text-[#35179d] border-white shadow-lg' 
                  : 'bg-transparent text-white border-white/50 hover:border-white'
              }`}
              onClick={() => handleSportSelect(sport)}
              disabled={sportLoading}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="flex w-full mb-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-1 shadow-lg">
          <TabsTrigger 
            value="upcoming" 
            className="flex-1 h-12 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#35179d] data-[state=active]:shadow-md text-white rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger 
            value="joined" 
            className="flex-1 h-12 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-[#35179d] data-[state=active]:shadow-md text-white rounded-lg transition-all duration-200 hover:bg-white/10"
          >
            My Activities
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-white-force">
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
            <div className="text-center py-8 text-white-force">
              <p>No upcoming activities available.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="joined" className="space-y-4">
          {loading ? (
            <div className="text-center py-8 text-white-force">
              <p>Loading activities...</p>
            </div>
          ) : !currentUser ? (
            <div className="text-center py-8 text-white-force">
              <p>You need to log in to see your activities.</p>
              <button 
                onClick={() => navigate('/login')}
                className="text-white-force mt-2 underline"
              >
                Log in
              </button>
            </div>
          ) : filteredJoinedRooms.length > 0 ? (
            filteredJoinedRooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                onActionComplete={handleRoomAction}
              />
            ))
          ) : (
            <div className="text-center py-8 text-white-force">
              <p>You haven't joined any activities yet.</p>
              <button 
                onClick={() => navigate('/explore')}
                className="text-white-force mt-2 underline"
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
