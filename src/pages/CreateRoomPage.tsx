
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ActivityLevel, SportType } from "@/types";
import { getSportIcon } from "@/lib/utils";
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
  const { currentUser } = useAuth();
  const [isPaid, setIsPaid] = useState(false);
  
  // Redirect to login if not authenticated
  if (!currentUser) {
    navigate("/login", { state: { from: "/create" } });
    return null;
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
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
      // Combine date and time into a single dateTime string
      const dateTime = new Date(`${data.date}T${data.time}`).toISOString();
      
      // Prepare room data
      const roomData = {
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
        price: isPaid ? data.price : undefined
      };
      
      // Create room in Firebase
      const roomId = await createRoom(roomData, currentUser.id);
      
      toast.success("Activity created successfully!");
      navigate(`/room/${roomId}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to create activity");
    }
  };
  
  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center mb-4">
        <ArrowLeft 
          size={20} 
          className="mr-3 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold">Create Activity</h1>
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
              className={errors.title ? "border-red-500" : ""}
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
            />
          </div>
          
          <div>
            <Label>Sport Type</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {Object.values(SportType).map((sport) => (
                <div 
                  key={sport}
                  className={`flex items-center p-3 rounded-lg border cursor-pointer ${
                    selectedSport === sport ? 'border-fitness-primary bg-blue-50' : ''
                  }`}
                  onClick={() => {
                    // Replace this with React Hook Form's setValue in a real implementation
                  }}
                >
                  <input
                    type="radio"
                    id={sport}
                    value={sport}
                    className="sr-only"
                    {...register("sportType")}
                  />
                  <span className="mr-2">{getSportIcon(sport)}</span>
                  <Label htmlFor={sport} className="cursor-pointer">
                    {sport}
                  </Label>
                </div>
              ))}
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
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                {...register("time", { required: "Time is required" })}
                className={errors.time ? "border-red-500" : ""}
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
                className={errors.duration ? "border-red-500" : ""}
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
                className={errors.maxParticipants ? "border-red-500" : ""}
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
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="locationLink">Location Link (optional)</Label>
            <Input
              id="locationLink"
              placeholder="Google Maps or other location link"
              {...register("locationLink")}
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
              <RadioGroupItem value="free" id="free" onClick={() => setIsPaid(false)} />
              <Label htmlFor="free">Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="paid" onClick={() => setIsPaid(true)} />
              <Label htmlFor="paid">Paid</Label>
            </div>
          </RadioGroup>
          
          {isPaid && (
            <div className="pt-3">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                min={1}
                step={0.01}
                placeholder="0.00"
                {...register("price")}
              />
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-fitness-primary hover:bg-fitness-primary/90" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Activity"}
        </Button>
      </form>
    </Layout>
  );
};

export default CreateRoomPage;
