
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { ActivityLevel, SportType } from "@/types";
import { ArrowLeft, Check, Camera, Edit2, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getSportIcon } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Check if user is logged in and redirect if not
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, loading, navigate]);
  
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <ArrowLeft 
              size={20} 
              className="mr-3 cursor-pointer text-white" 
              onClick={() => navigate(-1)}
            />
            <h1 className="text-xl font-bold text-white">Profile</h1>
          </div>
          {isEditing ? (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsEditing(false)}
              >
                <X className="h-4 w-4 mr-1" /> Cancel
              </Button>
              <Button 
                size="sm"
                className="bg-[#ff8800] text-white font-bold hover:bg-orange-600"
                onClick={handleSaveProfile}
                disabled={loading}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : <Check className="h-4 w-4 mr-1" />} Save
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className="h-4 w-4 mr-1" /> Edit
            </Button>
          )}
        </div>
        
        {/* Profile Content */}
        <div className="bg-[#35179d] rounded-2xl overflow-hidden shadow-sm">
          {/* Cover Photo & Avatar */}
          <div className="relative">
            <div className="h-32 bg-gradient-to-b from-white to-white/0" />
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
              <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                <img 
                  src={avatarUrl || displayUser?.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {uploadingImage ? (
                        <Loader2 className="h-6 w-6 text-white animate-spin" />
                      ) : (
                        <Camera className="h-6 w-6 text-white" />
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* User Info */}
          <div className="pt-16 pb-6 px-6 text-center text-white">
            <h2 className="text-xl font-bold">{displayUser?.name}</h2>
            <p className="text-white/70 text-sm">
              Member since {displayUser?.joinedDate ? new Date(displayUser.joinedDate).toLocaleDateString() : 'N/A'}
            </p>
            
            {/* Gender and Age Info */}
            <div className="flex justify-center gap-4 mt-2 text-sm">
              {displayUser?.gender && (
                <span className="text-white/80">
                  Gender: {displayUser.gender}
                </span>
              )}
              {displayUser?.age && (
                <span className="text-white/80">
                  Age: {displayUser.age}
                </span>
              )}
            </div>
            
            {isEditing ? (
              <div className="mt-3">
                <Textarea
                  placeholder="Write something about yourself..."
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
              </div>
            ) : (
              displayUser?.bio && (
                <p className="mt-3 text-white/90">{displayUser.bio}</p>
              )
            )}
          </div>
          
          <Separator />
          
          {/* Activity Level */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Activity Level</h3>
            {isEditing ? (
              <Select
                value={selectedLevel || undefined}
                onValueChange={(value) => setSelectedLevel(value as ActivityLevel)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ActivityLevel.Beginner}>Beginner</SelectItem>
                  <SelectItem value={ActivityLevel.Intermediate}>Intermediate</SelectItem>
                  <SelectItem value={ActivityLevel.Advanced}>Advanced</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/80">Beginner</span>
                  <span className="text-sm text-white/80">Advanced</span>
                </div>
                <div className="w-full h-2 bg-white/30 rounded-full">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      background: '#ff8800',
                      width: displayUser?.activityLevel === ActivityLevel.Beginner 
                        ? "33%" 
                        : displayUser?.activityLevel === ActivityLevel.Intermediate 
                        ? "66%" 
                        : "100%"
                    }} 
                  />
                </div>
                <div className="text-center mt-2">
                  <Badge variant="outline" className="bg-white text-[#35179d]">
                    {displayUser?.activityLevel || 'Not set'}
                  </Badge>
                </div>
              </>
            )}
          </div>
          
          <Separator />
          
          {/* Sport Interests */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Sport Interests</h3>
            {isEditing ? (
              <div className="flex flex-wrap gap-2">
                {Object.values(SportType).map(sport => (
                  <Badge 
                    key={sport} 
                    className={`px-3 py-1 cursor-pointer ${
                      selectedInterests.includes(sport) 
                        ? "bg-fitness-primary text-white hover:bg-fitness-primary/90" 
                        : "bg-white/20 text-white hover:bg-white/30"
                    } border-0`}
                    onClick={() => toggleSportInterest(sport)}
                  >
                    <span className="mr-1">{getSportIcon(sport)}</span> {sport}
                  </Badge>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {(displayUser?.interests || []).map(sport => (
                  <Badge key={sport} className="px-3 py-1 bg-fitness-primary/10 text-fitness-primary hover:bg-fitness-primary/20 border-0">
                    <span className="mr-1">{getSportIcon(sport)}</span> {sport}
                  </Badge>
                ))}
                {(displayUser?.interests?.length || 0) === 0 && (
                  <p className="text-white/70 text-sm">No interests selected</p>
                )}
              </div>
            )}
          </div>
          
          <Separator />
          
          {/* Statistics */}
          <div className="grid grid-cols-3 p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{displayUser?.joinedRooms?.length || 0}</p>
              <p className="text-sm text-white/70">Activities</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="text-2xl font-bold text-white/80">--</p>
              <p className="text-sm text-white/70">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white/80">--</p>
              <p className="text-sm text-white/70">Friends</p>
            </div>
          </div>
          
          <Separator />
          
          {/* Payment Integration Placeholder */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Payment Methods</h3>
            <Button 
              className="w-full bg-[#ff8800] text-white font-bold border-none hover:bg-orange-600"
              onClick={() => navigate('/payment')}
            >
              Add Payment Method
            </Button>
          </div>
          
          {/* Logout Button */}
          <div className="p-6 pt-0">
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
