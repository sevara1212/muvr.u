import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { sendChatMessage, subscribeToChatMessages, getRoomById } from "@/services/roomService";
import { ChatMessage, Room } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const AVATAR_COLORS = [
  "bg-purple-400", "bg-pink-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-red-400"
];

function getAvatarColor(userId: string) {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name?: string) {
  if (!name) return "?";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

interface RoomChatProps {
  roomId: string;
  isOpen: boolean;
  onClose: () => void;
}

const RoomChat = ({ roomId, isOpen, onClose }: RoomChatProps) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [roomLoading, setRoomLoading] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (isOpen && roomId) {
      setRoomLoading(true);
      getRoomById(roomId)
        .then((r) => setRoom(r))
        .finally(() => setRoomLoading(false));
      unsubscribeRef.current = subscribeToChatMessages(roomId, (newMessages) => {
        setMessages(newMessages);
        setTimeout(() => {
          if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
          }
        }, 100);
      });
      return () => {
        if (unsubscribeRef.current) unsubscribeRef.current();
      };
    }
  }, [isOpen, roomId]);

  const isApproved = room && currentUser && (room.approvedParticipants?.includes(currentUser.id) || room.hostId === currentUser.id);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !currentUser || !isApproved) return;
    try {
      setSending(true);
      await sendChatMessage(roomId, currentUser.id, newMessage.trim());
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  // Group consecutive messages from the same user
  const groupedMessages: Array<{ msg: ChatMessage; showAvatar: boolean; showName: boolean }> = [];
  let lastUserId = null;
  messages.forEach((msg, idx) => {
    const prev = messages[idx - 1];
    const showAvatar = !prev || prev.userId !== msg.userId;
    const showName = showAvatar;
    groupedMessages.push({ msg, showAvatar, showName });
    lastUserId = msg.userId;
  });

  return (
    <div className="relative h-full w-full flex flex-col bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Messages */}
      <ScrollArea className="flex-1 px-2 py-4 overflow-y-auto" ref={scrollAreaRef}>
        <div className="flex flex-col gap-2 max-w-2xl mx-auto">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="p-4 bg-purple-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Send className="h-8 w-8 text-purple-400" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">No messages yet</h4>
              <p className="text-sm text-gray-500">Start the conversation with your activity participants!</p>
            </div>
          ) : (
            groupedMessages.map(({ msg, showAvatar, showName }, idx) => {
              const isOwn = msg.userId === currentUser?.id;
              return (
                <div key={msg.id} className={`flex items-end gap-2 ${isOwn ? 'justify-end' : 'justify-start'}`}>
                  {/* Avatar and name for others */}
                  {!isOwn && showAvatar && (
                    <div className="flex flex-col items-center mr-1">
                      {msg.user?.avatar ? (
                        <img src={msg.user.avatar} alt={msg.user.name} className="w-8 h-8 rounded-full object-cover border-2 border-purple-200" />
                      ) : (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getAvatarColor(msg.userId)}`}>{getInitials(msg.user?.name)}</div>
                      )}
                      {showName && (
                        <span className="text-xs text-gray-500 mt-0.5 max-w-[60px] truncate">{msg.user?.name || "Unknown"}</span>
                      )}
                    </div>
                  )}
                  {/* Message bubble */}
                  <div className={`flex flex-col items-${isOwn ? 'end' : 'start'} max-w-[75%]`}>
                    {isOwn && showAvatar && (
                      <div className="flex flex-row-reverse items-center mb-0.5">
                        {currentUser?.avatar ? (
                          <img src={currentUser.avatar} alt="You" className="w-7 h-7 rounded-full object-cover border-2 border-purple-200 ml-1" />
                        ) : (
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs ml-1 ${getAvatarColor(currentUser?.id || "")}`}>{getInitials(currentUser?.name)}</div>
                        )}
                        <span className="text-xs text-gray-500 mr-1">You</span>
                      </div>
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl shadow-sm mb-0.5 ${
                        isOwn
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white self-end'
                          : 'bg-white text-gray-900 border border-gray-200 self-start'
                      }`}
                    >
                      <span className="text-sm leading-relaxed break-words whitespace-pre-line">{msg.message}</span>
                    </div>
                    <span className={`text-xs mt-0.5 ${isOwn ? 'text-purple-200 text-right' : 'text-gray-400 text-left'}`}>{formatTime(msg.timestamp)}</span>
                  </div>
                  {/* Avatar for own messages (right side) */}
                  {isOwn && showAvatar && (
                    <div className="flex flex-col items-center ml-1">
                      {currentUser?.avatar ? (
                        <img src={currentUser.avatar} alt="You" className="w-8 h-8 rounded-full object-cover border-2 border-purple-200" />
                      ) : (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getAvatarColor(currentUser?.id || "")}`}>{getInitials(currentUser?.name)}</div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>
      {/* Message Input */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 z-10">
        <div className="flex gap-3 items-end max-w-2xl mx-auto">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={roomLoading ? "Loading chat permissions..." : isApproved ? "Type your message..." : "You must be approved to chat"}
            className="flex-1 border-gray-200 focus:border-purple-300 focus:ring-purple-200 rounded-full"
            disabled={sending || !isApproved || roomLoading}
            autoFocus
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || sending || !isApproved || roomLoading}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 h-10 w-10 flex-shrink-0 shadow-md"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {!roomLoading && !isApproved && (
          <div className="text-center text-xs text-gray-500 mt-2">You must be approved by the host to send messages in this chat.</div>
        )}
      </div>
    </div>
  );
};

export default RoomChat; 