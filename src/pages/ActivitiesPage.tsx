
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getAllActivities } from '@/services/roomService';
import { Room, SportType } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  X, 
  ArrowUp, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { toast } from 'sonner';

interface ActivityCardProps {
  activity: Room;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  onTap: () => void;
  style: React.CSSProperties;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ 
  activity, 
  onSwipeRight, 
  onSwipeLeft, 
  onTap, 
  style 
}) => {
  const spotsLeft = activity.maxParticipants - (activity.participants?.length || 0);
  const capacityPercentage = ((activity.participants?.length || 0) / activity.maxParticipants) * 100;
  
  const getSportIcon = (sport: SportType) => {
    const icons: Record<SportType, string> = {
      [SportType.Running]: '🏃‍♂️',
      [SportType.Yoga]: '🧘‍♀️',
      [SportType.Cycling]: '🚴‍♂️',
      [SportType.Swimming]: '🏊‍♂️',
      [SportType.Basketball]: '🏀',
      [SportType.Football]: '⚽',
      [SportType.Tennis]: '🎾',
      [SportType.Gym]: '💪',
      [SportType.Other]: '🏆'
    };
    return icons[sport] || '🏆';
  };

  const getAIBlurb = () => {
    if (spotsLeft <= 2) return "🔥 Fills fast — only 2 spots left!";
    if (spotsLeft <= 5) return "⚡ Popular activity — join quickly!";
    if (capacityPercentage > 70) return "🎯 Great group forming!";
    return "✨ Perfect timing to join!";
  };

  return (
    <Card 
      className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border-0 overflow-hidden cursor-pointer"
      style={style}
      onClick={onTap}
    >
      {/* Activity Image/Background */}
      <div className="relative h-64 bg-gradient-to-br from-purple-500 to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Sport Icon Overlay */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
            <span className="text-2xl">{getSportIcon(activity.sportType)}</span>
          </div>
        </div>

        {/* Host Info */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold">4.8</span>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-800">
                {spotsLeft} spots left
              </span>
              <span className="text-xs text-gray-600">
                {activity.participants?.length || 0}/{activity.maxParticipants}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${capacityPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Activity Details */}
      <CardContent className="p-6">
        {/* Title and Sport */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {activity.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {activity.sportType}
            </Badge>
          </div>
        </div>

        {/* AI Blurb */}
        <p className="text-sm text-purple-600 font-medium mb-4">
          {getAIBlurb()}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={14} />
            <span>{new Date(activity.dateTime).toLocaleDateString()} at {new Date(activity.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={14} />
            <span>{activity.location.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={14} />
            <span>Hosted by {activity.hostName || 'Anonymous'}</span>
          </div>
        </div>

        {/* Swipe Actions */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-red-500 hover:bg-red-50"
            onClick={(e) => {
              e.stopPropagation();
              onSwipeLeft();
            }}
          >
            <X size={20} className="text-gray-500" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-green-500 hover:bg-green-50"
            onClick={(e) => {
              e.stopPropagation();
              onSwipeRight();
            }}
          >
            <Heart size={20} className="text-gray-500" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ActivitiesPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState<Room[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [swipedActivities, setSwipedActivities] = useState<Set<string>>(new Set());
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);
      const allActivities = await getAllActivities();
      
      // Filter out activities that are full or past date
      const now = new Date();
      const availableActivities = allActivities.filter(activity => {
        const activityDate = new Date(activity.dateTime);
        const spotsLeft = activity.maxParticipants - (activity.participants?.length || 0);
        return activityDate > now && spotsLeft > 0;
      });

      setActivities(availableActivities);
    } catch (error) {
      console.error('Error loading activities:', error);
      toast.error('Failed to load activities');
    } finally {
      setLoading(false);
    }
  };

  const handleSwipeRight = async () => {
    if (currentIndex >= activities.length) return;
    
    const activity = activities[currentIndex];
    setSwipedActivities(prev => new Set([...prev, activity.id]));
    
    // Show join request modal or navigate to details
    toast.success(`Interested in ${activity.title}!`);
    
    // Move to next card
    setCurrentIndex(prev => prev + 1);
  };

  const handleSwipeLeft = () => {
    if (currentIndex >= activities.length) return;
    
    const activity = activities[currentIndex];
    setSwipedActivities(prev => new Set([...prev, activity.id]));
    
    toast.info(`Passed on ${activity.title}`);
    
    // Move to next card
    setCurrentIndex(prev => prev + 1);
  };

  const handleTap = () => {
    if (currentIndex >= activities.length) return;
    
    const activity = activities[currentIndex];
    navigate(`/room/${activity.id}`);
  };

  const handleFilter = () => {
    // TODO: Implement filter modal
    toast.info('Filter options coming soon!');
  };

  const resetCards = () => {
    setCurrentIndex(0);
    setSwipedActivities(new Set());
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#35179d] mx-auto mb-4" />
          <p className="text-gray-600">Loading activities...</p>
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Heart size={48} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No activities available</h3>
          <p className="text-gray-600 mb-4">Check back later for new activities!</p>
          <Button onClick={loadActivities} variant="outline">
            Refresh
          </Button>
        </div>
      </div>
    );
  }

  if (currentIndex >= activities.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Heart size={48} className="text-[#35179d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You've seen all activities!</h3>
          <p className="text-gray-600 mb-4">Check back later for new activities or reset to see them again.</p>
          <Button onClick={resetCards} className="bg-[#35179d] hover:bg-[#2a146a]">
            See Activities Again
          </Button>
        </div>
      </div>
    );
  }

  const currentActivity = activities[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Discover Activities</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleFilter}
          className="text-gray-600"
        >
          <Filter size={20} />
        </Button>
      </div>

             {/* Activity Card */}
       <div className="p-4">
         <div className="flex justify-center">
           <ActivityCard
             activity={currentActivity}
             onSwipeRight={handleSwipeRight}
             onSwipeLeft={handleSwipeLeft}
             onTap={handleTap}
             style={{
               transform: 'scale(1)',
               transition: 'transform 0.2s ease-out'
             }}
           />
         </div>
       </div>

      {/* Progress Indicator */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{currentIndex + 1} of {activities.length}</span>
          <span>{Math.round(((currentIndex + 1) / activities.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <div 
            className="bg-[#35179d] h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / activities.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full w-16 h-16 p-0 border-2 border-gray-300 hover:border-red-500 hover:bg-red-50"
          onClick={handleSwipeLeft}
        >
          <X size={24} className="text-gray-500" />
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="rounded-full w-16 h-16 p-0 border-2 border-gray-300 hover:border-green-500 hover:bg-green-50"
          onClick={handleSwipeRight}
        >
          <Heart size={24} className="text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default ActivitiesPage;
