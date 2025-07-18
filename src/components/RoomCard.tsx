
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
  // Map sport types to icon image paths
  const sportIcons: Record<string, string> = {
    Running: '/images/running_icon.png',
    Yoga: '/images/yoga_icon.png',
    Basketball: '/images/basketball_icon.png',
    Cycling: '/images/cycling_icon.png',
    Tennis: '/images/tennis_icon.png',
    Gym: '/images/gym_icon.png',
    Football: '/images/football_icon.png',
    Swimming: '/images/swimming_icon.png',
  };
  
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
    <div className="bg-[#FDFDFF] rounded-[24px] shadow-lg p-6 mb-4 flex flex-col gap-4 w-full font-sans" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center gap-2">
          <span className="flex items-center">
            <img src={sportIcons[room.sportType]} alt={room.sportType + ' icon'} className="h-6 w-6 object-contain" />
          </span>
          <span className="font-bold text-[#1A1A72] text-base">{room.sportType}</span>
        </div>
        <span className="text-xs text-[#887DC0] font-medium mt-1">{participantsCount}/{room.maxParticipants} joined</span>
      </div>
      <h3 className="text-[20px] font-extrabold text-[#1A1A72] mb-1">{room.title}</h3>
      <div className="space-y-1 mb-2 text-[15px] text-[#887DC0]">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-[#887DC0]" />
          {formatDateTime(room.dateTime)}
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#887DC0]" />
          {formatDuration(room.duration)}
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-[#887DC0]" />
          {room.location.address}, {room.location.city}
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-[#887DC0]" />
          Hosted by {room.host?.name || "Unknown"}
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 gap-2">
        <button
          className="border-2 border-[#1A1A72] text-[#1A1A72] font-bold rounded-full px-6 py-2 bg-transparent hover:bg-[#f3f2ff] transition text-base"
          onClick={() => navigate(`/room/${room.id}`)}
        >
          Details
        </button>
        {!isUserHost && (
          <button
            className="rounded-full px-6 py-2 font-bold text-white text-base"
            style={{ background: isUserJoined ? '#887DC0' : (!isRoomFull ? 'linear-gradient(90deg, #FFA726 0%, #FB8C00 100%)' : '#887DC0'), backgroundImage: !isUserJoined && !isRoomFull ? 'linear-gradient(90deg, #FFA726 0%, #FB8C00 100%)' : undefined }}
            disabled={isRoomFull && !isUserJoined || loading}
            onClick={handleJoinLeave}
          >
            {loading ? "Loading..." : (isUserJoined ? "Leave" : (isRoomFull ? "Full" : "Join In"))}
          </button>
        )}
        {isUserHost && (
          <button
            className="rounded-full px-6 py-2 font-bold text-white text-base bg-[#1A1A72]"
            onClick={() => navigate(`/room/${room.id}`)}
          >
            Manage
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
