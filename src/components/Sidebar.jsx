import React from 'react';
import { Users, Shield, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/users', icon: Users, label: 'Users' },
    { to: '/roles', icon: Shield, label: 'Roles' },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="w-8 h-8 text-indigo-400" />
        <span className="text-xl font-bold">RBAC Admin</span>
      </div>
      <nav>
        {links.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors ${
              location.pathname === to
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
