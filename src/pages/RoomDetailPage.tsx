
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, User, Heart, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { formatDateTime, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getRoomById, joinRoom, leaveRoom, getRoomParticipants, requestToJoinRoom } from "@/services/roomService";
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
  const [hasPendingRequest, setHasPendingRequest] = useState(false);

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
          <p className="text-white">Loading activity details...</p>
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
  const sportImageMap = {
    Running: "/images/running_icon.png",
    Yoga: "/images/yoga_icon.png",
    Cycling: "/images/cycling_icon.png",
    Swimming: "/images/swimming_icon.png",
    Basketball: "/images/basketball_icon.png",
    Football: "/images/football_icon.png",
    Tennis: "/images/tennis_icon.png",
    Gym: "/images/gym_icon.png",
    Other: "/images/other_icon.png"
  };
  
  const isUserJoined = currentUser && room.participants?.includes(currentUser.id);
  const isUserHost = currentUser && room.hostId === currentUser.id;
  
  // Check if user has a pending request
  useEffect(() => {
    if (currentUser && room) {
      const checkPendingRequest = async () => {
        try {
          // Check if user has a pending request for this room
          const userPendingRequests = currentUser.pendingRequests || [];
          const roomPendingRequests = room.pendingRequests || [];
          
          // Check if there's a request that matches this room
          const hasRequest = roomPendingRequests.some(requestId => 
            userPendingRequests.includes(requestId)
          );
          
          setHasPendingRequest(hasRequest);
        } catch (error) {
          console.error("Error checking pending request:", error);
        }
      };
      
      checkPendingRequest();
    }
  }, [currentUser, room]);

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

  const handleRequestJoin = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    if (!id) return;
    
    setActionLoading(true);
    try {
      await requestToJoinRoom(id, currentUser.id);
      setHasPendingRequest(true);
      toast.success("Join request sent! Waiting for host approval.");
    } catch (error: any) {
      toast.error(error.message || "Failed to send request");
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
            className="mr-3 cursor-pointer text-white" 
            onClick={() => navigate(-1)}
          />
          <h1 className="text-xl font-bold text-white">Activity Details</h1>
        </div>
        <Heart 
          size={24} 
          fill={isFavorite ? "#EF4444" : "none"} 
          color={isFavorite ? "#EF4444" : "white"} 
          onClick={toggleFavorite}
          className="cursor-pointer"
        />
      </div>
      
      {/* Activity Card */}
      <div className="rounded-lg overflow-hidden">
        {/* Activity Type Banner */}
        <div className={`p-4 text-center sport-${sportLowerCase}`}>
          <span className="flex justify-center items-center mb-2">
            <img src={sportImageMap[room.sportType]} alt={room.sportType} className="w-12 h-12 object-contain" />
          </span>
          <h2 className="text-xl font-bold mt-1 text-[#35179d]">{room.sportType}</h2>
        </div>
        
        {/* Activity Details */}
        <div className="bg-white p-5 rounded-b-lg shadow-sm text-[#35179d]">
          <h2 className="text-2xl font-bold mb-1">{room.title}</h2>
          {room.price && (
            <div className="mb-4">
              <span className="text-green-600 font-semibold">${room.price}</span>
              <span className="text-[#35179d] text-sm"> per person</span>
            </div>
          )}
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-3 text-[#35179d]" />
              <span className="text-[#35179d]">{formatDateTime(room.dateTime)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-3 text-[#35179d]" />
              <span className="text-[#35179d]">{formatDuration(room.duration)}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-3 text-[#35179d]" />
              <span className="text-[#35179d]">{room.location.address}, {room.location.city}</span>
            </div>
            {/* Location Link */}
            <div className="flex items-center">
              <ExternalLink size={18} className="mr-3 text-[#35179d]" />
              <a 
                href={getLocationLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#35179d] hover:underline flex items-center"
              >
                View on Map
              </a>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-3 text-[#35179d]" />
              <span className="text-[#35179d]">{participantsCount} of {room.maxParticipants} joined</span>
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-3 text-[#35179d]" />
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden mr-2">
                  <img 
                    src={room.host?.avatar || "https://randomuser.me/api/portraits/men/32.jpg"} 
                    alt={room.host?.name || "Host"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#35179d]">Hosted by {room.host?.name || "Unknown"}</span>
              </div>
            </div>
          </div>
          {/* Description */}
          {room.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-[#35179d]">Description</h3>
              <p className="text-[#35179d]">{room.description}</p>
            </div>
          )}
          {/* Participants */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-[#35179d]">Participants ({participantsCount})</h3>
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
                  <span className="text-sm text-[#35179d]">{participant.name}</span>
                </div>
              ))}
              {participants.length === 0 && (
                <p className="text-[#35179d]/60 text-sm">No participants yet. Be the first to join!</p>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              className="flex-1 bg-orange-500 text-white font-bold hover:bg-orange-600 border-none"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
            {!isUserHost && (
              <Button 
                className={`flex-1 ${
                  isUserJoined 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : hasPendingRequest 
                      ? 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed' 
                      : 'bg-fitness-primary hover:bg-fitness-primary/90'
                }`}
                disabled={isRoomFull && !isUserJoined || actionLoading || hasPendingRequest}
                onClick={isUserJoined ? handleJoinLeave : hasPendingRequest ? () => {} : handleRequestJoin}
              >
                {actionLoading 
                  ? "Processing..." 
                  : (isUserJoined 
                    ? "Leave Activity" 
                    : hasPendingRequest 
                      ? "Request Sent ✓" 
                      : (isRoomFull ? "Activity Full" : "Request to Join"))}
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
      {/* Removed floating + button */}
    </Layout>
  );
};

export default RoomDetailPage;
