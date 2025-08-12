import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { JoinRequest, Room } from '@/types';
import { ArrowLeft, Bell, Clock, MapPin, Users, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const SentRequestsPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [sentRequests, setSentRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    loadSentRequests();
  }, [currentUser, navigate]);

  const loadSentRequests = async () => {
    try {
      setLoading(true);
      // This would need to be implemented in roomService
      // For now, we'll show a mock implementation
      const mockRequests: JoinRequest[] = [
        {
          id: '1',
          roomId: 'room1',
          userId: currentUser!.id,
          hostId: 'host1',
          status: 'pending',
          requestedAt: new Date(),
          message: 'I would love to join this activity!',
          room: {
            id: 'room1',
            title: 'Morning Running Group',
            sportType: 'Running',
            dateTime: new Date(Date.now() + 86400000).toISOString(),
            location: { address: 'Central Park', city: 'Tashkent' },
            maxParticipants: 10,
            participants: [],
            hostName: 'John Doe'
          } as Room,
          user: currentUser!
        }
      ];
      
      setSentRequests(mockRequests);
    } catch (error) {
      console.error('Error loading sent requests:', error);
      toast.error('Failed to load sent requests');
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = async (requestId: string) => {
    try {
      // This would need to be implemented in roomService
      setSentRequests(prev => prev.filter(req => req.id !== requestId));
      toast.success('Request cancelled successfully');
    } catch (error) {
      console.error('Error cancelling request:', error);
      toast.error('Failed to cancel request');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400 border-yellow-400/30';
      case 'approved':
        return 'text-green-400 border-green-400/30';
      case 'rejected':
        return 'text-red-400 border-red-400/30';
      default:
        return 'text-white/60 border-white/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#35179d] mx-auto mb-4" />
            <p className="text-gray-600">Loading sent requests...</p>
          </div>
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
              <h1 className="text-2xl font-bold text-white mb-1">Sent Requests</h1>
              <p className="text-white/70 text-sm">Requests you've sent to join activities</p>
            </div>
          </div>
        </div>

        {sentRequests.length === 0 ? (
          <div className="text-center py-12">
            <Bell size={48} className="text-white/50 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No sent requests</h3>
            <p className="text-white/70 mb-4">You haven't sent any join requests yet</p>
            <Button 
              onClick={() => navigate('/activities')}
              className="bg-white text-[#35179d] hover:bg-white/90"
            >
              Discover Activities
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {sentRequests.map((request) => (
              <Card 
                key={request.id}
                className="bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{request.room?.title}</h3>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(request.status)}`}>
                        {getStatusText(request.status)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs">
                        {new Date(request.requestedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-white/80 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>
                        {request.room?.dateTime && new Date(request.room.dateTime).toLocaleDateString()} at{' '}
                        {request.room?.dateTime && new Date(request.room.dateTime).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{request.room?.location?.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      <span>
                        {request.room?.participants?.length || 0}/{request.room?.maxParticipants} participants
                      </span>
                    </div>
                  </div>

                  {request.message && (
                    <div className="bg-white/5 rounded-lg p-3 mb-3">
                      <p className="text-white/80 text-sm">{request.message}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">
                      Host: {request.room?.hostName || 'Anonymous'}
                    </span>
                    
                    {request.status === 'pending' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-red-400 border-red-400/30 hover:bg-red-400/20"
                        onClick={() => cancelRequest(request.id)}
                      >
                        <X className="h-3 w-3 mr-1" />
                        Cancel
                      </Button>
                    )}
                    
                    {request.status === 'approved' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-green-400 border-green-400/30 hover:bg-green-400/20"
                        onClick={() => navigate(`/room/${request.roomId}`)}
                      >
                        <Check className="h-3 w-3 mr-1" />
                        View Activity
                      </Button>
                    )}
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

export default SentRequestsPage; 