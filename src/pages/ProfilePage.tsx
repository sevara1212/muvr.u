
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ActivityLevel, SportType, Room } from "@/types";
import { ArrowLeft, Check, Camera, Edit2, X, Loader2, MessageCircle, Bell, User, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getSportIcon } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import { getJoinedRooms } from "@/services/roomService";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { 
    user, 
    loading, 
    uploadingImage, 
    uploadProfileImage, 
    updateActivityLevel, 
    updateSportInterests,
    updateBio 
  } = useProfile();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editBio, setEditBio] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<ActivityLevel | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<SportType[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [joinedActivities, setJoinedActivities] = useState<Room[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Check if user is logged in and redirect if not
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, loading, navigate]);

  // Load joined activities
  useEffect(() => {
    if (currentUser) {
      loadJoinedActivities();
    }
  }, [currentUser]);

  const loadJoinedActivities = async () => {
    try {
      const activities = await getJoinedRooms(currentUser!.id);
      setJoinedActivities(activities);
    } catch (error) {
      console.error('Error loading joined activities:', error);
    }
  };
  
  // Initialize edit fields when user data is available
  useEffect(() => {
    if (user) {
      setEditBio(user.bio || "");
      setSelectedLevel(user.activityLevel);
      setSelectedInterests([...user.interests]);
      setAvatarUrl(user.avatar || null);
    } else if (currentUser) {
      // If user is not available from useProfile but currentUser is available from useAuth
      setEditBio(currentUser.bio || "");
      setSelectedLevel(currentUser.activityLevel);
      setSelectedInterests([...currentUser.interests]);
      setAvatarUrl(currentUser.avatar || null);
    }
  }, [user, currentUser]);
  
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }
    
    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      return;
    }
    
    const newAvatarUrl = await uploadProfileImage(file);
    if (newAvatarUrl) {
      setAvatarUrl(newAvatarUrl);
    }
  };
  
  const handleSaveProfile = async () => {
    let success = true;
    
    // Update bio if changed
    if (editBio !== (user?.bio || "")) {
      success = await updateBio(editBio) && success;
    }
    
    // Update activity level if changed
    if (selectedLevel && selectedLevel !== user?.activityLevel) {
      success = await updateActivityLevel(selectedLevel) && success;
    }
    
    // Update interests if changed
    const currentInterests = user?.interests || [];
    if (JSON.stringify(selectedInterests.sort()) !== JSON.stringify(currentInterests.sort())) {
      success = await updateSportInterests(selectedInterests) && success;
    }
    
    if (success) {
      setIsEditing(false);
    }
  };
  
  const toggleSportInterest = (sport: SportType) => {
    if (selectedInterests.includes(sport)) {
      setSelectedInterests(selectedInterests.filter(s => s !== sport));
    } else {
      setSelectedInterests([...selectedInterests, sport]);
    }
  };
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      toast.error("Failed to log out");
    }
  };
  
  // Use either user from useProfile or currentUser from useAuth
  const displayUser = user || currentUser;
  
  if (loading || !displayUser) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-72">
          <Loader2 className="h-8 w-8 animate-spin text-fitness-primary" />
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="min-h-screen bg-[#35179d] py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <ArrowLeft 
              size={20} 
              className="mr-3 cursor-pointer text-white hover:text-white/80 transition-colors" 
              onClick={() => navigate(-1)}
            />
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Chats</h1>
              <p className="text-white/70 text-sm">Stay connected with your activities</p>
            </div>
          </div>
          
          {/* Profile Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 rounded-full w-12 h-12 p-0 transition-all duration-200 hover:scale-105 shadow-lg"
            onClick={() => navigate('/profile-settings')}
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Chats Content */}
        <div className="space-y-6">
          {/* Requests Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Requests</h3>
              <p className="text-white/70 text-sm">Manage your requests</p>
            </div>
            
            <div className="space-y-3">
              {/* Join Requests Received */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">Join Requests</h4>
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 text-xs">
                    2 pending
                  </Badge>
                </div>
                <p className="text-white/70 text-xs mb-3">
                  Requests sent to your activities
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 transition-all duration-200 hover:scale-105"
                  onClick={() => navigate('/requests')}
                >
                  <Bell className="h-3 w-3 mr-2" />
                  View Requests
                </Button>
              </div>

              {/* Join Requests Sent */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">Sent Requests</h4>
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 text-xs">
                    3 sent
                  </Badge>
                </div>
                <p className="text-white/70 text-xs mb-3">
                  Requests you've sent to join activities
                </p>
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 transition-all duration-200 hover:scale-105"
                  onClick={() => navigate('/sent-requests')}
                >
                  <Bell className="h-3 w-3 mr-2" />
                  View Sent
                </Button>
              </div>
            </div>
          </div>

          {/* Recent Chats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Recent Chats</h3>
              <p className="text-white/70 text-sm">Your activity conversations</p>
            </div>
            
            {joinedActivities.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle size={40} className="text-white/50 mx-auto mb-3" />
                <p className="text-white/80 text-base font-medium mb-1">No activity chats yet</p>
                <p className="text-white/60 text-sm">Join an activity to start chatting!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {joinedActivities.slice(0, 3).map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] border border-white/10"
                    onClick={() => navigate(`/chat/${activity.id}`)}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl">{getSportIcon(activity.sportType)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white truncate text-base">{activity.title}</h4>
                      <p className="text-white/70 text-sm truncate">
                        {new Date(activity.dateTime).toLocaleDateString()}
                      </p>
                    </div>
                    <MessageCircle size={18} className="text-white/60" />
                  </div>
                ))}
                
                {joinedActivities.length > 3 && (
                  <Button 
                    variant="outline"
                    className="w-full text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 transition-all duration-200 hover:scale-105 mt-4"
                    onClick={() => navigate('/chats')}
                  >
                    View All Chats ({joinedActivities.length})
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">Quick Actions</h3>
              <p className="text-white/70 text-sm">Get started quickly</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline"
                className="text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 transition-all duration-200 hover:scale-105 h-12"
                onClick={() => navigate('/activities')}
              >
                <Heart className="h-5 w-5 mr-2" />
                Discover
              </Button>
              <Button 
                variant="outline"
                className="text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 transition-all duration-200 hover:scale-105 h-12"
                onClick={() => navigate('/create')}
              >
                <Plus className="h-5 w-5 mr-2" />
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
