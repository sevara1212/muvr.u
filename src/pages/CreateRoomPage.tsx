
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ActivityLevel, SportType } from "@/types";
// import { getSportIcon } from "@/lib/utils";
import { createRoom } from "@/services/roomService";
import { useAuth } from "@/contexts/AuthContext";

interface CreateRoomForm {
  title: string;
  description: string;
  sportType: SportType;
  date: string;
  time: string;
  duration: number;
  maxParticipants: number;
  address: string;
  city: string;
  locationLink?: string;
  price?: number;
}

const CreateRoomPage = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useAuth();
  const [isPaid, setIsPaid] = useState(false);
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login", { state: { from: "/create" } });
    }
  }, [currentUser, loading, navigate]);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<CreateRoomForm>({
    defaultValues: {
      sportType: SportType.Running,
      duration: 60,
      maxParticipants: 5,
    }
  });
  
  const selectedSport = watch("sportType");
  
  const onSubmit = async (data: CreateRoomForm) => {
    try {
      // Check if user is logged in
      if (!currentUser) {
        toast.error("You must be logged in to create an activity");
        return;
      }
      
      // Combine date and time into a single dateTime string
      const dateTime = new Date(`${data.date}T${data.time}`).toISOString();
      
      // Prepare room data
      const roomData: any = {
        title: data.title,
        description: data.description,
        sportType: data.sportType,
        dateTime,
        duration: data.duration,
        maxParticipants: data.maxParticipants,
        location: {
          address: data.address,
          city: data.city,
          locationLink: data.locationLink || "",
          lat: 0, // Default values since we're not using maps
          lng: 0
        },
        hostId: currentUser.id
      };
      if (isPaid && data.price) {
        roomData.price = data.price;
      }
      
      // Create room in Firebase
      const roomId = await createRoom(roomData, currentUser.id);
      
      toast.success("Activity created successfully!");
      navigate(`/room/${roomId}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to create activity");
    }
  };
  
  // Show loading state if auth is still loading
  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-72">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-fitness-primary"></div>
        </div>
      </Layout>
    );
  }
  
  // If user is not authenticated and loading is complete, the useEffect will redirect
  if (!currentUser) {
    return null;
  }
  
  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center mb-4">
        <ArrowLeft 
          size={20} 
          className="mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Activity Title</Label>
            <Input
              id="title"
              placeholder="Give your activity a name"
              {...register("title", { required: "Title is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.title ? "border-red-500" : ""}`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your activity..."
              rows={3}
              {...register("description")}
              className="bg-white placeholder:text-gray-400 text-gray-900"
            />
          </div>
          
          <div>
            <Label>Sport Type</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {Object.values(SportType).map((sport) => {
                const sportImageMap = {
                  Running: "/images/running_icon.png",
                  Yoga: "/images/yoga_icon.png",
                  Cycling: "/images/cycling_icon.png",
                  Swimming: "/images/swimming_icon.png",
                  Basketball: "/images/basketball_icon.png",
                  Football: "/images/football_icon.png",
                  Tennis: "/images/tennis_icon.png",
                  Gym: "/images/gym_icon.png",
                  Other: "/images/other_icon.png"
                };
                return (
                  <button
                    type="button"
                    key={sport}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border w-full font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#35179d] ${
                      selectedSport === sport ? 'bg-[#35179d] text-white border-[#35179d] shadow-lg' : 'bg-white text-[#35179d] border-gray-300'
                    }`}
                    onClick={() => setValue("sportType", sport)}
                  >
                    <img src={sportImageMap[sport]} alt={sport} className="w-6 h-6 object-contain" />
                    {sport}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Date, Time, Duration */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                {...register("date", { required: "Date is required" })}
                className={`bg-white placeholder:text-gray-400 text-orange-500 ${errors.date ? "border-red-500" : ""}`}
                style={{ colorScheme: 'orange' }}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                {...register("time", { required: "Time is required" })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.time ? "border-red-500" : ""}`}
              />
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                min={15}
                step={15}
                {...register("duration", { 
                  required: "Duration is required",
                  min: { value: 15, message: "Minimum 15 minutes" },
                })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.duration ? "border-red-500" : ""}`}
              />
              {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="maxParticipants">Max Participants</Label>
              <Input
                id="maxParticipants"
                type="number"
                min={1}
                max={50}
                {...register("maxParticipants", { 
                  required: "Required",
                  min: { value: 1, message: "At least 1" },
                  max: { value: 50, message: "Max 50" },
                })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.maxParticipants ? "border-red-500" : ""}`}
              />
              {errors.maxParticipants && <p className="text-red-500 text-xs mt-1">{errors.maxParticipants.message}</p>}
            </div>
          </div>
        </div>
        
        {/* Location */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Activity location"
              {...register("address", { required: "Address is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.address ? "border-red-500" : ""}`}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.city ? "border-red-500" : ""}`}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="locationLink">Location Link (optional)</Label>
            <Input
              id="locationLink"
              placeholder="Google Maps or other location link"
              {...register("locationLink")}
              className={`bg-white placeholder:text-gray-400 text-gray-900`}
            />
            <p className="text-xs text-gray-500 mt-1">
              Add a Google Maps link to help participants find the location
            </p>
          </div>
        </div>
        
        {/* Payment Option */}
        <div className="space-y-2">
          <Label>Activity Type</Label>
          <RadioGroup defaultValue="free" className="flex">
            <div className="flex items-center space-x-2 mr-6">
              <RadioGroupItem value="free" id="free" onClick={() => setIsPaid(false)} className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500" />
              <Label htmlFor="free">Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="paid" onClick={() => setIsPaid(true)} className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500" />
              <Label htmlFor="paid">Price (uzs)</Label>
            </div>
          </RadioGroup>
          
          {isPaid && (
            <div className="pt-3">
              <Label htmlFor="price">Price (uzs)</Label>
              <Input
                id="price"
                type="number"
                min={1}
                step={1000}
                placeholder="0"
                {...register("price")}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.price ? "border-red-500" : ""}`}
              />
              {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Activity"}
        </Button>
      </form>
      {/* Style for date picker selected day */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(54%) sepia(98%) saturate(749%) hue-rotate(0deg) brightness(102%) contrast(101%); }
        input[type="date"]::-webkit-input-placeholder { color: #a3a3a3; }
        input[type="date"]::placeholder { color: #a3a3a3; }
      `}</style>
    </Layout>
  );
};

export default CreateRoomPage;
