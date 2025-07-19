import { useNavigate, useParams } from "react-router-dom";
import RoomChat from "@/components/RoomChat";
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { getRoomById } from "@/services/roomService";
import { Room } from "@/types";
import { formatDateTime, formatDuration } from "@/lib/utils";

const ChatPage = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (roomId) {
      setLoading(true);
      getRoomById(roomId)
        .then((r) => setRoom(r))
        .finally(() => setLoading(false));
    }
  }, [roomId]);

  if (!roomId) return <div className="flex items-center justify-center h-screen">Room not found</div>;

  return (
    <div className="fixed inset-0 bg-white flex flex-col h-screen w-screen z-50">
      {/* Header with back arrow */}
      <div className="flex items-center gap-2 p-4 border-b bg-gradient-to-r from-purple-50 to-white">
        <button
          className="p-2 rounded-full hover:bg-purple-100"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft className="h-6 w-6 text-purple-700" />
        </button>
        <span className="font-semibold text-lg text-[#35179d]">Activity Chat</span>
      </div>
      {/* Centered Group Info */}
      {room && (
        <div className="w-full flex flex-col items-center justify-center py-3 border-b bg-white">
          <div className="font-bold text-[#35179d] text-lg text-center">{room.sportType}</div>
          <div className="text-xs text-gray-500 font-medium text-center mb-1">{room.title}</div>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500 mt-1">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDateTime(room.dateTime)}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{formatDuration(room.duration)}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{room.location.address}, {room.location.city}</span>
          </div>
        </div>
      )}
      {/* Chat UI */}
      <div className="flex-1 min-h-0">
        <RoomChat roomId={roomId} isOpen={true} onClose={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default ChatPage; 