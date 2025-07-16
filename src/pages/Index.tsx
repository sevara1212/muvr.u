
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import RoomCard from "@/components/RoomCard";
import SportCategoryCard from "@/components/SportCategoryCard";
import { SportType } from "@/types";
import { Search, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRooms } from "@/hooks/useRooms";

const Index = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { rooms, userRooms, loading, error, fetchAllRooms } = useRooms(currentUser);
  const [recommendedRooms, setRecommendedRooms] = useState<typeof rooms>([]);
  
  // Refresh data when component mounts or when user changes
  useEffect(() => {
    fetchAllRooms();
  }, [currentUser]);
  
  // Sort rooms based on user preferences
  useEffect(() => {
    if (rooms.length > 0) {
      // Create a copy of rooms to sort
      let sortedRooms = [...rooms];
      
      // If user is logged in, sort by user interests
      if (currentUser?.interests && currentUser.interests.length > 0) {
        sortedRooms.sort((a, b) => {
          // Check if room sport type is in user interests
          const aMatchesInterest = currentUser.interests.includes(a.sportType);
          const bMatchesInterest = currentUser.interests.includes(b.sportType);
          
          if (aMatchesInterest && !bMatchesInterest) return -1;
          if (!aMatchesInterest && bMatchesInterest) return 1;
          
          // If both match or both don't match, sort by date
          return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
        });
      } else {
        // If no preferences, sort by date
        sortedRooms.sort((a, b) => 
          new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
        );
      }
      
      // Filter out past events
      const now = new Date();
      sortedRooms = sortedRooms.filter(room => new Date(room.dateTime) > now);
      
      // Take first 5 rooms
      setRecommendedRooms(sortedRooms.slice(0, 5));
    }
  }, [rooms, currentUser]);

  // Determine popular sport categories
  const popularSportTypes = [SportType.Running, SportType.Yoga, SportType.Basketball, SportType.Cycling];
  
  const handleRoomAction = () => {
    // Refresh data when a user joins or leaves a room
    fetchAllRooms();
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">FitTribe</h1>
          <div 
            className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            <img 
              src={currentUser?.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Search Bar */}
        <div 
          className="flex items-center bg-white rounded-full border p-2 px-4 cursor-pointer"
          onClick={() => navigate('/explore')}
        >
          <Search size={18} className="text-gray-400 mr-2" />
          <span className="text-gray-400">Search activities...</span>
        </div>
        
        {/* Sport Categories */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button 
              onClick={() => navigate('/explore')}
              className="text-sm text-fitness-primary"
            >
              See all
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {popularSportTypes.map(sport => (
              <SportCategoryCard key={sport} sportType={sport} />
            ))}
          </div>
        </div>
        
        {/* Upcoming Activities */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">
              {currentUser ? "Recommended for You" : "Upcoming Activities"}
            </h2>
            <button 
              onClick={() => navigate('/activities')}
              className="text-sm text-fitness-primary"
            >
              See all
            </button>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-fitness-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              Failed to load activities. Please try again.
            </div>
          ) : recommendedRooms.length > 0 ? (
            <div className="space-y-4">
              {recommendedRooms.map(room => (
                <RoomCard 
                  key={room.id} 
                  room={room} 
                  onActionComplete={handleRoomAction}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              No upcoming activities found. 
              <button 
                onClick={() => navigate('/create')}
                className="ml-2 text-fitness-primary"
              >
                Create one?
              </button>
            </div>
          )}
        </div>
        
        {/* User's Activities (if logged in) */}
        {currentUser && userRooms.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Your Activities</h2>
              <button 
                onClick={() => navigate('/activities')}
                className="text-sm text-fitness-primary"
              >
                See all
              </button>
            </div>
            <div className="space-y-4">
              {userRooms.slice(0, 2).map(room => (
                <RoomCard 
                  key={room.id} 
                  room={room} 
                  onActionComplete={handleRoomAction}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
