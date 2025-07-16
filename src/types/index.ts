
export interface User {
  id: string;
  name: string;
  avatar?: string;
  interests: SportType[];
  activityLevel: ActivityLevel;
  joinedDate: string;
  bio?: string;
  email?: string;
  joinedRooms?: string[]; // Array of room IDs the user has joined
}

export enum ActivityLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced"
}

export enum SportType {
  Running = "Running",
  Yoga = "Yoga",
  Cycling = "Cycling",
  Swimming = "Swimming",
  Basketball = "Basketball",
  Football = "Football",
  Tennis = "Tennis",
  Gym = "Gym",
  Other = "Other"
}

export interface Room {
  id: string;
  title: string;
  sportType: SportType;
  hostId: string; // ID of the host user
  host?: User; // Full host user object (may be populated from hostId)
  location: Location;
  dateTime: string;
  duration: number; // in minutes
  maxParticipants: number;
  participants: string[]; // Array of user IDs who have joined
  description?: string;
  price?: number; // Optional for paid activities
  createdAt?: any; // Timestamp from Firebase
}

export interface Location {
  address: string;
  city: string;
  lat: number;
  lng: number;
  locationLink?: string;
}

export interface FirebaseRoom extends Omit<Room, 'id'> {
  // For Firestore document
}
