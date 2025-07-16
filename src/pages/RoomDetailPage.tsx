
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, User, Heart, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { formatDateTime, formatDuration, getSportIcon } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getRoomById, joinRoom, leaveRoom, getRoomParticipants } from "@/services/roomService";
import { Room, User as UserType } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [room, setRoom] = useState<Room | null>(null);
  const [participants, setParticipants] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRoomData = async () => {
      if (!id) return;
      
      try {
        const roomData = await getRoomById(id);
        if (roomData) {
          setRoom(roomData);
          const participantsData = await getRoomParticipants(id);
          setParticipants(participantsData);
        }
      } catch (error) {
        console.error("Error fetching room:", error);
        toast.error("Failed to load activity details");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-72">
          <p>Loading activity details...</p>
        </div>
      </Layout>
    );
  }

  if (!room) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-72">
          <h2 className="text-xl font-semibold mb-2">Activity Not Found</h2>
          <p className="text-gray-500 mb-4">The activity you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </Layout>
    );
  }

  const participantsCount = room.participants?.length || 0;
  const isRoomFull = participantsCount >= room.maxParticipants;
  const sportLowerCase = room.sportType.toLowerCase();
  
  const isUserJoined = currentUser && room.participants?.includes(currentUser.id);
  const isUserHost = currentUser && room.hostId === currentUser.id;

  const handleJoinLeave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    if (!id) return;
    
    setActionLoading(true);
    try {
      if (isUserJoined) {
        await leaveRoom(id, currentUser.id);
        toast.success("You have left the activity");
        
        // Update local state
        setRoom(prev => {
          if (!prev) return null;
          return {
            ...prev,
            participants: prev.participants.filter(pid => pid !== currentUser.id)
          };
        });
        setParticipants(prev => prev.filter(p => p.id !== currentUser.id));
      } else {
        await joinRoom(id, currentUser.id);
        toast.success("You have joined the activity");
        
        // Update local state
        setRoom(prev => {
          if (!prev) return null;
          return {
            ...prev,
            participants: [...prev.participants, currentUser.id]
          };
        });
        setParticipants(prev => [...prev, currentUser]);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to perform action");
    } finally {
      setActionLoading(false);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  // Generate a default Google Maps link if locationLink is not provided
  const getLocationLink = () => {
    if (room.location.locationLink) {
      return room.location.locationLink;
    }
    
    // Create a Google Maps search link using the address
    const searchQuery = encodeURIComponent(`${room.location.address}, ${room.location.city}`);
    return `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;
  };

  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <ArrowLeft 
            size={20} 
            className="mr-3 cursor-pointer" 
            onClick={() => navigate(-1)}
          />
          <h1 className="text-xl font-bold">Activity Details</h1>
        </div>
        <Heart 
          size={24} 
          fill={isFavorite ? "#EF4444" : "none"} 
          color={isFavorite ? "#EF4444" : "currentColor"} 
          onClick={toggleFavorite}
          className="cursor-pointer"
        />
      </div>
      
      {/* Activity Card */}
      <div className="rounded-lg overflow-hidden">
        {/* Activity Type Banner */}
        <div className={`p-4 text-center sport-${sportLowerCase}`}>
          <span className="text-3xl">{getSportIcon(room.sportType)}</span>
          <h2 className="text-xl font-bold mt-1">{room.sportType}</h2>
        </div>
        
        {/* Activity Details */}
        <div className="bg-white p-5 rounded-b-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-1">{room.title}</h2>
          
          {room.price && (
            <div className="mb-4">
              <span className="text-green-600 font-semibold">${room.price}</span>
              <span className="text-gray-500 text-sm"> per person</span>
            </div>
          )}
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-3 text-gray-400" />
              <span>{formatDateTime(room.dateTime)}</span>
            </div>
            
            <div className="flex items-center">
              <Clock size={18} className="mr-3 text-gray-400" />
              <span>{formatDuration(room.duration)}</span>
            </div>
            
            <div className="flex items-center">
              <MapPin size={18} className="mr-3 text-gray-400" />
              <span>{room.location.address}, {room.location.city}</span>
            </div>
            
            {/* Location Link */}
            <div className="flex items-center">
              <ExternalLink size={18} className="mr-3 text-gray-400" />
              <a 
                href={getLocationLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fitness-primary hover:underline flex items-center"
              >
                View on Map
              </a>
            </div>
            
            <div className="flex items-center">
              <Users size={18} className="mr-3 text-gray-400" />
              <span>{participantsCount} of {room.maxParticipants} joined</span>
            </div>
            
            <div className="flex items-center">
              <User size={18} className="mr-3 text-gray-400" />
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden mr-2">
                  <img 
                    src={room.host?.avatar || "https://randomuser.me/api/portraits/men/32.jpg"} 
                    alt={room.host?.name || "Host"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Hosted by {room.host?.name || "Unknown"}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          {room.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{room.description}</p>
            </div>
          )}
          
          {/* Participants */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Participants ({participantsCount})</h3>
            <div className="flex flex-wrap gap-2">
              {participants.map(participant => (
                <div key={participant.id} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                    <img 
                      src={participant.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"} 
                      alt={participant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm">{participant.name}</span>
                </div>
              ))}
              {participants.length === 0 && (
                <p className="text-gray-500 text-sm">No participants yet. Be the first to join!</p>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            
            {!isUserHost && (
              <Button 
                className={`flex-1 ${isUserJoined ? 'bg-red-500 hover:bg-red-600' : 'bg-fitness-primary hover:bg-fitness-primary/90'}`}
                disabled={isRoomFull && !isUserJoined || actionLoading}
                onClick={handleJoinLeave}
              >
                {actionLoading 
                  ? "Processing..." 
                  : (isUserJoined 
                    ? "Leave Activity" 
                    : (isRoomFull ? "Activity Full" : "Join Activity"))}
              </Button>
            )}
            
            {isUserHost && (
              <Button 
                className="flex-1 bg-fitness-secondary hover:bg-fitness-secondary/90"
                onClick={() => navigate(`/edit-room/${id}`)}
              >
                Edit Activity
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetailPage;
