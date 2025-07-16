
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Plus, Calendar, User } from "lucide-react";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around px-4">
      <button 
        onClick={() => navigate('/')}
        className={`flex flex-col items-center justify-center ${isActive('/') ? 'text-fitness-primary' : 'text-gray-500'}`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button 
        onClick={() => navigate('/explore')}
        className={`flex flex-col items-center justify-center ${isActive('/explore') ? 'text-fitness-primary' : 'text-gray-500'}`}
      >
        <Search size={20} />
        <span className="text-xs mt-1">Explore</span>
      </button>
      
      <button 
        onClick={() => navigate('/create')}
        className="flex flex-col items-center justify-center bg-fitness-primary text-white rounded-full w-12 h-12 -mt-5"
      >
        <Plus size={24} />
      </button>
      
      <button 
        onClick={() => navigate('/activities')}
        className={`flex flex-col items-center justify-center ${isActive('/activities') ? 'text-fitness-primary' : 'text-gray-500'}`}
      >
        <Calendar size={20} />
        <span className="text-xs mt-1">Activities</span>
      </button>
      
      <button 
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center justify-center ${isActive('/profile') ? 'text-fitness-primary' : 'text-gray-500'}`}
      >
        <User size={20} />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
