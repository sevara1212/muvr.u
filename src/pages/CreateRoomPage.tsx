
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
import { ActivityLevel, SportType, Gender } from "@/types";
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
  genderPreference?: Gender;
  ageRangeMin?: number;
  ageRangeMax?: number;
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
      genderPreference: Gender.Both,
      ageRangeMin: 14,
      ageRangeMax: 60,
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
        hostId: currentUser.id,
        genderPreference: data.genderPreference || Gender.Both,
        ageRange: {
          min: data.ageRangeMin || 14,
          max: data.ageRangeMax || 60
        }
      };
      if (isPaid && data.price) {
        roomData.price = data.price;
      }
      
      // Create room in Firebase
      const roomId = await createRoom(roomData, currentUser.id);
      
      // Show success notification that auto-dismisses
      toast.success("🎉 Activity created successfully!", {
        duration: 2000,
        description: "Your activity is now live and ready for participants!"
      });
      
      // Navigate after a short delay to let user see the success message
      setTimeout(() => {
        navigate(`/room/${roomId}`);
      }, 1000);
    } catch (error: any) {
      toast.error(error.message || "Failed to create activity");
    }
  };
  
  // Show loading state if auth is still loading
  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-72">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
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
          className="mr-3 cursor-pointer text-white-force" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold text-white-force">Create Activity</h1>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-white-force">Activity Title</Label>
            <Input
              id="title"
              placeholder="Give your activity a name"
              {...register("title", { required: "Title is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.title ? "border-red-500" : ""}`}
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="description" className="text-white-force">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your activity..."
              rows={3}
              {...register("description")}
              className="bg-white placeholder:text-gray-400 text-gray-900"
            />
          </div>
          
          <div>
            <Label className="text-white-force">Sport Type</Label>
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
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 w-full font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                      selectedSport === sport ? 'bg-white text-[#35179d] border-white shadow-lg' : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
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
              <Label htmlFor="date" className="text-white-force">Date</Label>
              <Input
                id="date"
                type="date"
                {...register("date", { required: "Date is required" })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.date ? "border-red-500" : ""}`}
              />
              {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="time" className="text-white-force">Time</Label>
              <Input
                id="time"
                type="time"
                {...register("time", { required: "Time is required" })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.time ? "border-red-500" : ""}`}
              />
              {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration" className="text-white-force">Duration (minutes)</Label>
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
              {errors.duration && <p className="text-red-400 text-xs mt-1">{errors.duration.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="maxParticipants" className="text-white-force">Max Participants</Label>
              <Input
                id="maxParticipants"
                type="number"
                min={2}
                max={50}
                {...register("maxParticipants", { 
                  required: "Required",
                  min: { value: 2, message: "Minimum is 2 (you + at least one other person)" },
                  max: { value: 50, message: "Max 50" },
                })}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.maxParticipants ? "border-red-500" : ""}`}
              />
              <p className="text-xs text-white/70 mt-1">Minimum is 2 (yourself and at least one other participant)</p>
              {errors.maxParticipants && <p className="text-red-400 text-xs mt-1">{errors.maxParticipants.message}</p>}
            </div>
          </div>
        </div>
        
        {/* Gender and Age Preferences */}
        <div className="space-y-4">
          <div>
            <Label className="text-white-force">Gender Preference</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {Object.values(Gender).map((gender) => (
                <button
                  type="button"
                  key={gender}
                  className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    watch("genderPreference") === gender 
                      ? 'bg-white text-[#35179d] border-white shadow-lg' 
                      : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                  }`}
                  onClick={() => setValue("genderPreference", gender)}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Label className="text-white-force">Age Range</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="ageRangeMin" className="text-white-force text-xs">Min Age</Label>
                <Input
                  id="ageRangeMin"
                  type="number"
                  min={14}
                  max={60}
                  {...register("ageRangeMin", { 
                    min: { value: 14, message: "Minimum 14" },
                    max: { value: 60, message: "Maximum 60" },
                  })}
                  className="bg-white placeholder:text-gray-400 text-gray-900"
                />
              </div>
              <div>
                <Label htmlFor="ageRangeMax" className="text-white-force text-xs">Max Age</Label>
                <Input
                  id="ageRangeMax"
                  type="number"
                  min={14}
                  max={60}
                  {...register("ageRangeMax", { 
                    min: { value: 14, message: "Minimum 14" },
                    max: { value: 60, message: "Maximum 60" },
                  })}
                  className="bg-white placeholder:text-gray-400 text-gray-900"
                />
              </div>
            </div>
            <p className="text-xs text-white/70 mt-1">Default: 14-60 years</p>
          </div>
        </div>
        
        {/* Location */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="address" className="text-white-force">Address</Label>
            <Input
              id="address"
              placeholder="Activity location"
              {...register("address", { required: "Address is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.address ? "border-red-500" : ""}`}
            />
            {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="city" className="text-white-force">City</Label>
            <Input
              id="city"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.city ? "border-red-500" : ""}`}
            />
            {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="locationLink" className="text-white-force">Location Link (optional)</Label>
            <Input
              id="locationLink"
              placeholder="Google Maps or other location link"
              {...register("locationLink")}
              className="bg-white placeholder:text-gray-400 text-gray-900"
            />
            <p className="text-xs text-white/70 mt-1">
              Add a Google Maps link to help participants find the location
            </p>
          </div>
        </div>
        
        {/* Payment Option */}
        <div className="space-y-2">
          <Label className="text-white-force">Activity Type</Label>
          <RadioGroup defaultValue="free" className="flex">
            <div className="flex items-center space-x-2 mr-6">
              <RadioGroupItem value="free" id="free" onClick={() => setIsPaid(false)} className="data-[state=checked]:border-white data-[state=checked]:bg-white" />
              <Label htmlFor="free" className="text-white-force">Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="paid" onClick={() => setIsPaid(true)} className="data-[state=checked]:border-white data-[state=checked]:bg-white" />
              <Label htmlFor="paid" className="text-white-force">Price (uzs)</Label>
            </div>
          </RadioGroup>
          
          {isPaid && (
            <div className="pt-3">
              <Label htmlFor="price" className="text-white-force">Price (uzs)</Label>
              <Input
                id="price"
                type="number"
                min={1}
                step={1000}
                placeholder="0"
                {...register("price")}
                className={`bg-white placeholder:text-gray-400 text-gray-900 ${errors.price ? "border-red-500" : ""}`}
              />
              {errors.price && <p className="text-red-400 text-xs mt-1">{errors.price.message}</p>}
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-white text-[#35179d] hover:bg-gray-100 font-bold" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Activity"}
        </Button>
      </form>
    </Layout>
  );
};

export default CreateRoomPage;
