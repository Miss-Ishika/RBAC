import React from 'react';
import { Users, Shield, Lock } from 'lucide-react';
import { users, roles, permissions } from '../data/mockData';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex flex-col items-center justify-between">
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className='mt-4 flex flex-col items-center'>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: users.length,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Roles',
      value: roles.length,
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      title: 'Total Permissions',
      value: permissions.length,
      icon: Lock,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="flex items-end justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      
      {/* <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {users.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-center space-x-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className='flex flex-col'>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">
                  Joined as {roles.find(role => role.id === user.roleId)?.name}
                </p>
              </div>
              <span className="ml-auto text-sm text-gray-500">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
