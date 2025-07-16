
import { Room } from "@/types";
import { Button } from "@/components/ui/button";
import { formatDateTime, formatDuration, getSportIcon } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { MapPin, Users, Calendar, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { joinRoom, leaveRoom } from "@/services/roomService";
import { toast } from "sonner";
import { useState } from "react";

interface RoomCardProps {
  room: Room;
  onActionComplete?: () => void;
}

const RoomCard = ({ room, onActionComplete }: RoomCardProps) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  
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
    
    setLoading(true);
    try {
      if (isUserJoined) {
        await leaveRoom(room.id, currentUser.id);
        toast.success("You have left the activity");
      } else {
        await joinRoom(room.id, currentUser.id);
        toast.success("You have joined the activity");
      }
      
      if (onActionComplete) {
        onActionComplete();
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to perform action");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="activity-card animate-fade-in">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className={`activity-tag sport-${sportLowerCase}`}>
            <span className="mr-1">{getSportIcon(room.sportType)}</span>
            {room.sportType}
          </div>
          {room.price && (
            <span className="ml-2 text-xs font-medium text-green-600">
              ${room.price}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500">
          {participantsCount}/{room.maxParticipants} joined
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
      
      <div className="space-y-2 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar size={14} className="mr-2 text-gray-400" />
          {formatDateTime(room.dateTime)}
        </div>
        <div className="flex items-center">
          <Clock size={14} className="mr-2 text-gray-400" />
          {formatDuration(room.duration)}
        </div>
        <div className="flex items-center">
          <MapPin size={14} className="mr-2 text-gray-400" />
          {room.location.address}, {room.location.city}
        </div>
        <div className="flex items-center">
          <Users size={14} className="mr-2 text-gray-400" />
          Hosted by {room.host?.name || "Unknown"}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate(`/room/${room.id}`)}
        >
          Details
        </Button>
        
        {!isUserHost && (
          <Button 
            size="sm" 
            disabled={isRoomFull && !isUserJoined || loading}
            onClick={handleJoinLeave}
            variant={isUserJoined ? "destructive" : "default"}
            className={isUserJoined ? "" : (!isRoomFull ? "bg-fitness-primary" : "bg-gray-400")}
          >
            {loading ? "Loading..." : (isUserJoined ? "Leave" : (isRoomFull ? "Full" : "Join"))}
          </Button>
        )}
        
        {isUserHost && (
          <Button 
            size="sm" 
            variant="secondary"
            onClick={() => navigate(`/room/${room.id}`)}
          >
            Manage
          </Button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
