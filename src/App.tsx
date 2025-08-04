
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useTelegramViewport } from "@/hooks/useTelegramViewport";
import Index from "./pages/Index";
import ExplorePage from "./pages/ExplorePage";
import CreateRoomPage from "./pages/CreateRoomPage";
import RoomDetailPage from "./pages/RoomDetailPage";

import EditRoomPage from "./pages/EditRoomPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ProfilePage from "./pages/ProfilePage";
import PaymentPage from "./pages/PaymentPage";
import NotFoundWithLayout from "./pages/NotFoundWithLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ChatPage from "./pages/ChatPage";

const queryClient = new QueryClient();

const AppContent = () => {
  useTelegramViewport(); // Apply Telegram viewport fix
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/room/:id" element={<RoomDetailPage />} />
      <Route path="/join/:id" element={<RoomDetailPage />} />
      <Route path="/edit-room/:id" element={<EditRoomPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/category/:sport" element={<ExplorePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/chat/:roomId" element={<ChatPage />} />
      <Route path="*" element={<NotFoundWithLayout />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
