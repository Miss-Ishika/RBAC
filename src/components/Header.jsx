import React from 'react';
import { Bell, User } from 'lucide-react';
import { Users, Shield, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {

  const location = useLocation();

  const links = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'Users' },
    { to: '/roles', icon: Shield, label: 'Roles' },
  ];


  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">RBAC</h1>
        <nav className='flex gap-24 text-lg font-semibold'>
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center space-x-2  transition-colors ${
              location.pathname === to
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:border-b-2 hover:border-gray-400'
            }`}
          >
            {/* <Icon className="w-5 h-5" /> */}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className='text-gray-600'>Admin</div>
      
        {/* <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
