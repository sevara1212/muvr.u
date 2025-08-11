import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Room } from '@/types';
import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getJoinedRooms } from '@/services/roomService';
import { toast } from 'sonner';

const UpcomingPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [upcomingActivities, setUpcomingActivities] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    loadUpcomingActivities();
  }, [currentUser, navigate]);

  const loadUpcomingActivities = async () => {
    try {
      setLoading(true);
      const allActivities = await getJoinedRooms(currentUser!.id);
      
      // Filter only upcoming activities
      const now = new Date();
      const upcoming = allActivities.filter(activity => 
        new Date(activity.dateTime) > now
      );
      
      // Sort by date (earliest first)
      upcoming.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
      
      setUpcomingActivities(upcoming);
    } catch (error) {
      console.error('Error loading upcoming activities:', error);
      toast.error('Failed to load upcoming activities');
    } finally {
      setLoading(false);
    }
  };

  const getSportIcon = (sportType: string) => {
    const icons: Record<string, string> = {
      'Running': '🏃‍♂️',
      'Yoga': '🧘‍♀️',
      'Cycling': '🚴‍♂️',
      'Swimming': '🏊‍♂️',
      'Basketball': '🏀',
      'Football': '⚽',
      'Tennis': '🎾',
      'Gym': '💪',
      'Other': '🏆'
    };
    return icons[sportType] || '🏆';
  };

  const getTimeUntilActivity = (dateTime: string) => {
    const now = new Date();
    const activityDate = new Date(dateTime);
    const diffTime = activityDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    return `In ${Math.ceil(diffDays / 7)} weeks`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#35179d] mx-auto mb-4" />
            <p className="text-gray-600">Loading upcoming activities...</p>
          </div>
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
            <h1 className="text-xl font-bold text-white">Upcoming Activities</h1>
          </div>
          <Button 
            onClick={() => navigate('/activities')}
            variant="outline"
            size="sm"
            className="text-white border-white/30 hover:bg-white/20"
          >
            Discover More
          </Button>
        </div>

        {upcomingActivities.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={48} className="text-white/50 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No upcoming activities</h3>
            <p className="text-white/70 mb-4">Join some activities to see them here!</p>
            <Button 
              onClick={() => navigate('/activities')}
              className="bg-[#ff8800] text-white hover:bg-orange-600"
            >
              Discover Activities
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingActivities.map((activity) => (
              <Card 
                key={activity.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                onClick={() => navigate(`/room/${activity.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">{getSportIcon(activity.sportType)}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{activity.title}</h3>
                        <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                          {activity.sportType}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs text-green-300 border-green-300/30">
                        {getTimeUntilActivity(activity.dateTime)}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>
                        {new Date(activity.dateTime).toLocaleDateString()} at{' '}
                        {new Date(activity.dateTime).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{activity.location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>
                        {activity.participants?.length || 0}/{activity.maxParticipants} participants
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/60">
                        Hosted by {activity.hostName || 'Anonymous'}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-white border-white/30 hover:bg-white/20"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UpcomingPage; 