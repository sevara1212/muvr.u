
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
  
  const sportIcons: Record<string, string> = {
    Running: '/images/running_icon.png',
    Yoga: '/images/yoga_icon.png',
    Basketball: '/images/basketball_icon.png',
    Cycling: '/images/cycling_icon.png',
  };

  const handleRoomAction = () => {
    // Refresh data when a user joins or leaves a room
    fetchAllRooms();
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-[#35179d] text-white flex flex-col items-center justify-start font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {/* Header and Slogan */}
        <div className="w-full max-w-2xl px-4 pt-8 pb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-white overflow-hidden" style={{ height: '3.5rem', width: '3.5rem', minWidth: '3.5rem' }}>
              <img src="/images/muvr_logo.png" alt="Muvr Logo" className="h-[60rem] w-[60rem] object-contain" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-left leading-tight">Muvr.u</h1>
          </div>
          {/* Search Bar */}
          <div className="my-4">
            <div className="flex items-center bg-[#7c5dfa]/60 rounded-full px-4 py-2 shadow-inner">
              <Search size={20} className="text-white/80 mr-2" />
              <input
                type="text"
                placeholder="Search activities..."
                className="bg-transparent outline-none border-none text-white/90 placeholder-white/70 w-full text-base"
                style={{ fontFamily: 'inherit' }}
                readOnly
                onClick={() => navigate('/explore')}
              />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-left mt-2 mb-4">Move , Match , Motivate!</div>
        </div>
        {/* Hero Image */}
        <div className="w-full max-w-2xl px-4 mb-4">
          <div className="rounded-[2.5rem] shadow-xl overflow-hidden">
            <img 
              src="/images/muvr_photo.png"
              alt="Muvr Team"
              className="w-full object-cover"
              style={{ maxHeight: '380px', minHeight: '220px', objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* Categories */}
        <div className="w-full max-w-2xl px-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-left">Categories</h2>
            <button 
              onClick={() => navigate('/explore')}
              className="text-base text-white/80 hover:text-white underline font-medium"
            >
              See all
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {popularSportTypes.map(sport => (
              <div className="flex flex-col items-center justify-between bg-white rounded-2xl shadow h-24 w-20 mx-auto cursor-pointer hover:bg-gray-100 transition p-2" key={sport}>
                <div className="flex-grow flex flex-col items-center justify-center">
                  <img 
                    src={sportIcons[sport]} 
                    alt={sport + ' icon'} 
                    className="h-14 w-14 object-contain mb-[2px]" 
                  />
                  <span className="text-xs font-semibold text-[#35179d] capitalize leading-tight text-center mt-0.5">{sport}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Upcoming Activities */}
        <div className="w-full max-w-2xl px-4 mb-4">
          <h2 className="text-2xl font-bold text-left mb-2">Upcoming Activities</h2>
          <div className="space-y-3">
            {loading ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-8 w-8 animate-spin text-white/80" />
              </div>
            ) : error ? (
              <div className="text-center py-4 text-red-300">
                Failed to load activities. Please try again.
              </div>
            ) : recommendedRooms.length > 0 ? (
              recommendedRooms.map(room => (
                <RoomCard 
                  key={room.id}
                  room={room} 
                  onActionComplete={handleRoomAction}
                />
              ))
            ) : (
              <div className="text-center py-4 text-white/60">
                No upcoming activities found. 
                <button 
                  onClick={() => navigate('/create')}
                  className="ml-2 underline hover:text-white"
                >
                  Create one?
                </button>
              </div>
            )}
          </div>
        </div>
        {/* User's Activities (if logged in) */}
        {currentUser && userRooms.length > 0 && (
          <div className="w-full max-w-2xl px-4 mb-4">
            <h2 className="text-2xl font-bold text-left mb-2">Your Activities</h2>
            <div className="space-y-3">
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
