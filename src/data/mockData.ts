
import { ActivityLevel, Room, SportType, User } from "@/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    interests: [SportType.Running, SportType.Cycling, SportType.Gym],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2023-01-15",
    bio: "Marathon runner and cycling enthusiast. Always looking for new challenges!"
  },
  {
    id: "2",
    name: "Sarah Williams",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    interests: [SportType.Yoga, SportType.Swimming],
    activityLevel: ActivityLevel.Intermediate,
    joinedDate: "2023-02-20",
    bio: "Yoga instructor with a passion for mindfulness and healthy living."
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    interests: [SportType.Basketball, SportType.Football],
    activityLevel: ActivityLevel.Advanced,
    joinedDate: "2023-03-10"
  },
  {
    id: "4",
    name: "Emma Davis",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    interests: [SportType.Tennis, SportType.Swimming, SportType.Yoga],
    activityLevel: ActivityLevel.Beginner,
    joinedDate: "2023-04-05",
    bio: "New to fitness but excited to learn and meet new people!"
  }
];

// Mock current user
export const currentUser: User = mockUsers[0];

// Mock Rooms/Activities
export const mockRooms: Room[] = [
  {
    id: "101",
    title: "Morning Run in Central Park",
    sportType: SportType.Running,
    host: mockUsers[0],
    location: {
      address: "Central Park, Loop Trail",
      city: "New York",
      lat: 40.785091,
      lng: -73.968285
    },
    dateTime: "2025-05-15T08:00:00",
    duration: 60,
    maxParticipants: 10,
    currentParticipants: 3,
    description: "A refreshing 5K morning run. All levels welcome!"
  },
  {
    id: "102",
    title: "Sunset Yoga Session",
    sportType: SportType.Yoga,
    host: mockUsers[1],
    location: {
      address: "Venice Beach",
      city: "Los Angeles",
      lat: 33.985047,
      lng: -118.469601
    },
    dateTime: "2025-05-16T18:30:00",
    duration: 90,
    maxParticipants: 15,
    currentParticipants: 8,
    description: "Relaxing yoga session as the sun sets. Bring your own mat.",
    price: 10
  },
  {
    id: "103",
    title: "Basketball Pickup Game",
    sportType: SportType.Basketball,
    host: mockUsers[2],
    location: {
      address: "Rucker Park",
      city: "New York",
      lat: 40.829023,
      lng: -73.936275
    },
    dateTime: "2025-05-17T17:00:00",
    duration: 120,
    maxParticipants: 10,
    currentParticipants: 6,
    description: "Casual 5v5 basketball. All skill levels welcome."
  },
  {
    id: "104",
    title: "Group Cycling Adventure",
    sportType: SportType.Cycling,
    host: mockUsers[0],
    location: {
      address: "Golden Gate Park",
      city: "San Francisco",
      lat: 37.769421,
      lng: -122.486214
    },
    dateTime: "2025-05-18T09:00:00",
    duration: 180,
    maxParticipants: 8,
    currentParticipants: 3,
    description: "25-mile scenic ride through the city and along the coast. Intermediate level."
  },
  {
    id: "105",
    title: "Tennis Match Practice",
    sportType: SportType.Tennis,
    host: mockUsers[3],
    location: {
      address: "City Tennis Courts",
      city: "Boston",
      lat: 42.361145,
      lng: -71.057083
    },
    dateTime: "2025-05-19T16:00:00",
    duration: 90,
    maxParticipants: 4,
    currentParticipants: 2,
    description: "Looking for tennis partners for doubles practice.",
    price: 5
  },
  {
    id: "106",
    title: "Gym Buddy Workout",
    sportType: SportType.Gym,
    host: mockUsers[2],
    location: {
      address: "Fitness First",
      city: "Chicago",
      lat: 41.881832,
      lng: -87.623177
    },
    dateTime: "2025-05-20T18:00:00",
    duration: 60,
    maxParticipants: 3,
    currentParticipants: 1,
    description: "Need a spotter for chest day. Can help with your routine too!"
  }
];

// Helper function to filter rooms by sport type
export const getRoomsBySport = (sportType: SportType): Room[] => {
  return mockRooms.filter(room => room.sportType === sportType);
};

// Helper function to get upcoming rooms
export const getUpcomingRooms = (): Room[] => {
  const now = new Date();
  return mockRooms
    .filter(room => new Date(room.dateTime) > now)
    .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
};

// Helper function to get joined rooms for current user
export const getJoinedRooms = (): Room[] => {
  // Mock implementation - in real app would check participant list
  return [mockRooms[0], mockRooms[4]];
};
