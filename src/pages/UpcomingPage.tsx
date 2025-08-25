import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Room } from '@/types';
import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAllActivities, getJoinedRooms } from '@/services/roomService';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { formatDateTime, formatDuration } from '@/lib/utils';

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
      // Fetch curated activities and rooms the user joined/created, then merge
      const [allActivities, joinedRooms] = await Promise.all([
        getAllActivities(),
        getJoinedRooms(currentUser!.id)
      ]);

      // Merge by id (rooms and activities may have different ids; we just combine)
      const combined: Room[] = [...allActivities, ...joinedRooms];

      const now = new Date();
      // Activities user is involved in (host or participant)
      const involved = combined.filter(a =>
        (a.hostId === currentUser?.id) || (a.participants || []).includes(currentUser!.id)
      );

      const current = involved.filter(a => new Date(a.dateTime) > now)
        .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());

      const past = involved.filter(a => new Date(a.dateTime) <= now)
        .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

      (current as any).__kind = 'current';
      (past as any).__kind = 'past';

      setUpcomingActivities([...current, ...past]);
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

  const formatDateTime = (dateTime: string) => {
    try {
      const date = new Date(dateTime);
      if (isNaN(date.getTime())) {
        return 'Invalid date';
      }
      return format(date, "EEE, MMM d, yyyy 'at' h:mm a");
    } catch (error) {
      console.error('Error formatting date:', dateTime, error);
      return 'Invalid date';
    }
  };

  const formatDuration = (duration: any) => {
    try {
      const minutes = Number(duration);
      if (isNaN(minutes)) {
        return 'Duration not set';
      }
      if (minutes < 60) {
        return `${minutes} min`;
      } else {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return remainingMinutes 
          ? `${hours}h ${remainingMinutes}m` 
          : `${hours}h`;
      }
    } catch (error) {
      console.error('Error formatting duration:', duration, error);
      return 'Duration not set';
    }
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
            className="text-white border-white/30 hover:bg-white/20 bg-[#35179d]/20 font-medium"
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
          <div className="space-y-6">
            {/* Current activities */}
            {upcomingActivities.some((a: any) => a.__kind === 'current') && (
              <div>
                <h2 className="text-white font-semibold mb-2">Current Activities</h2>
                <div className="space-y-4">
                  {upcomingActivities.filter((a: any) => a.__kind === 'current').map((activity) => (
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
                            <span>{formatDateTime(activity.dateTime)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{formatDuration(activity.duration)}</span>
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
                              Hosted by {activity.host?.name || activity.hostName || 'Unknown'}
                            </span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/room/${activity.id}`);
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Past activities */}
            {upcomingActivities.some((a: any) => a.__kind === 'past') && (
              <div>
                <h2 className="text-white font-semibold mt-4 mb-2">Past Activities</h2>
                <div className="space-y-4">
                  {upcomingActivities.filter((a: any) => a.__kind === 'past').map((activity) => (
                    <Card 
                      key={activity.id}
                      className="bg-white/5 backdrop-blur-sm border-white/10"
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
                            <span>{formatDateTime(activity.dateTime)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{formatDuration(activity.duration)}</span>
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
                              Hosted by {activity.host?.name || activity.hostName || 'Unknown'}
                            </span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/room/${activity.id}`);
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UpcomingPage; 