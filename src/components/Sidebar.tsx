import React from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import user from "../assests/img/Oval.webp"
import cover from "../assests/img/coverPhoto.webp"

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="h-24 bg-gray-200 relative">
          <img 
            src={cover}
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 pb-6 text-center relative">
          <div className="w-20 h-20 mx-auto -mt-10 mb-3 relative">
            <img 
               src={user}
              alt="Profile" 
              className="w-full h-full rounded-full border-4 border-white object-cover"
            />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Albert Flores</h2>
          <p className="text-sm text-gray-500 font-medium">Senior Product Designer | UI/UX Designer | Graphic Designer | Web...</p>
          <p className="text-xs text-gray-400 mt-1">Clinton, Maryland</p>
        </div>
        
        <div className="border-t border-gray-100">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between text-sm group cursor-pointer">
              <span className="text-gray-600 font-medium group-hover:text-primary-700">Profile Visitors</span>
              <span className="text-primary-600 font-bold">140</span>
            </div>
            <div className="flex items-center justify-between text-sm group cursor-pointer">
              <span className="text-gray-600 font-medium group-hover:text-primary-700">Resume Viewers</span>
              <span className="text-primary-600 font-bold">20</span>
            </div>
            <div className="flex items-center justify-between text-sm group cursor-pointer">
              <span className="text-gray-600 font-medium group-hover:text-primary-700">My Jobs</span>
              <span className="text-primary-600 font-bold">88</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
         <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors rounded-xl">
            <div className="font-bold text-gray-900 text-sm">My calendar</div>
            <ChevronDown size={16} className="text-gray-400" />
         </div>
         <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 mb-2">Upcoming Interviews</div>
            {/* Calendar list could go here, keeping it minimal as per screenshot which shows it collapsed usually or just the header */}
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;