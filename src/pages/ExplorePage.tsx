
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import RoomCard from "@/components/RoomCard";
import SportCategoryCard from "@/components/SportCategoryCard";
import { Room, SportType } from "@/types";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllRooms, getRoomsBySport } from "@/services/roomService";
import { toast } from "sonner";

const ExplorePage = () => {
  const navigate = useNavigate();
  const { sport } = useParams<{ sport: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SportType | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch rooms from Firebase
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        let fetchedRooms: Room[];
        
        if (sport && Object.values(SportType).includes(sport as SportType)) {
          // If sport is provided in URL, set it as selected category
          setSelectedCategory(sport as SportType);
          fetchedRooms = await getRoomsBySport(sport);
        } else if (selectedCategory) {
          // If category is selected but not from URL
          fetchedRooms = await getRoomsBySport(selectedCategory);
        } else {
          // Get all rooms
          fetchedRooms = await getAllRooms();
        }
        
        setRooms(fetchedRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        toast.error("Failed to load activities");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRooms();
  }, [selectedCategory, sport]);
  
  // Filter rooms based on search query
  const filteredRooms = rooms.filter(room => {
    const matchesQuery = !searchQuery || 
                         room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.location.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesQuery;
  });
  
  const handleCategorySelect = async (category: SportType) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    
    // Update URL if category changes
    if (newCategory) {
      navigate(`/category/${newCategory}`, { replace: true });
    } else {
      navigate('/explore', { replace: true });
    }
  };
  
  // Refresh rooms after join/leave actions
  const handleRoomAction = async () => {
    setLoading(true);
    try {
      let fetchedRooms: Room[];
      
      if (selectedCategory) {
        fetchedRooms = await getRoomsBySport(selectedCategory);
      } else {
        fetchedRooms = await getAllRooms();
      }
      
      setRooms(fetchedRooms);
    } catch (error) {
      console.error("Error refreshing rooms:", error);
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
        <h1 className="text-xl font-bold">Explore Activities</h1>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full border p-2 px-4 mb-5">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by title, description or city..."
          className="flex-grow bg-transparent focus:outline-none text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Filter size={18} className="text-gray-400 cursor-pointer" />
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-4 gap-3">
          {Object.values(SportType).map((sport) => (
            <div 
              key={sport}
              onClick={() => handleCategorySelect(sport)}
              className={`${selectedCategory === sport ? 'ring-2 ring-fitness-primary' : ''} rounded-lg`}
            >
              <SportCategoryCard sportType={sport} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Results */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Activities</h2>
          <span className="text-sm text-gray-500">
            {loading ? "Loading..." : `${filteredRooms.length} found`}
          </span>
        </div>
        
        {loading ? (
          <div className="text-center py-8 text-gray-500">
            <p>Loading activities...</p>
          </div>
        ) : filteredRooms.length > 0 ? (
          <div className="space-y-4">
            {filteredRooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={room} 
                onActionComplete={handleRoomAction}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No activities found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ExplorePage;
