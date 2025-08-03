
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Plus, Calendar, User } from "lucide-react";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <div className="fixed bottom-1 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 z-50">
      <button 
        onClick={() => navigate('/')}
        className={`flex flex-col items-center justify-center flex-1 ${isActive('/') ? 'text-[#35179d]' : 'text-gray-400'}`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button 
        onClick={() => navigate('/explore')}
        className={`flex flex-col items-center justify-center flex-1 ${isActive('/explore') ? 'text-[#35179d]' : 'text-gray-400'}`}
      >
        <Search size={20} />
        <span className="text-xs mt-1">Explore</span>
      </button>
      
      <div className="flex-1 flex justify-center">
        <button 
          onClick={() => navigate('/create')}
          className="flex flex-col items-center justify-center bg-[#35179d] text-white rounded-full w-14 h-14 shadow-lg border-4 border-white -mt-2"
        >
          <Plus size={28} />
        </button>
      </div>
      
      <button 
        onClick={() => navigate('/activities')}
        className={`flex flex-col items-center justify-center flex-1 ${isActive('/activities') ? 'text-[#35179d]' : 'text-gray-400'}`}
      >
        <Calendar size={20} />
        <span className="text-xs mt-1">Activities</span>
      </button>
      
      <button 
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center justify-center flex-1 ${isActive('/profile') ? 'text-[#35179d]' : 'text-gray-400'}`}
      >
        <User size={20} />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
