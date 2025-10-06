import {  Home, BarChart3, Settings, Users, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

// interface ISidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const navigationItems = [
  { name: 'Dashboard', icon: Home, path: '/home', current: true },
  { name: 'Reports', icon: BarChart3, path: '/reports', current: false },
  { name: 'Team', icon: Users, path: '/team', current: false },
  { name: 'Calendar', icon: Calendar, path: '/calendar', current: false },
  { name: 'Settings', icon: Settings, path: '/settings', current: false },
];

export const Sidebar = () => {

    const [activePath, setActivePath] = useState('/')

    const navigate = useNavigate()

    const handleClick = (path: string) =>{
        if(path === '/home'){
            navigate("/")
        }else{
            navigate(path)
        }
        setActivePath(()=>path)
    }


  return (
    <>
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-surface border-r border-border-light shadow-lg z-50
             flex flex-col justify-between cursor-pointer`}>

        {/* Navigation items */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                onClick={()=>handleClick(item.path)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                  ${activePath === item.path
                    ? 'bg-primary text-text-primary bg-gray-100' 
                    : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-light">
          <div className="text-sm text-text-muted">
            <p>Unified Dashboard v1.0</p>
          </div>
        </div>
      </div>
    </>
  );
};
