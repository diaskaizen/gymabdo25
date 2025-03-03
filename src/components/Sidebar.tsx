import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Users, Calendar, CreditCard, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, text: 'لوحة التحكم', path: '/' },
    { icon: Users, text: 'الأعضاء', path: '/members' },
    { icon: Calendar, text: 'الحضور', path: '/attendance' },
    { icon: CreditCard, text: 'المدفوعات', path: '/payments' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <Dumbbell className="w-8 h-8 text-emerald-500" />
        <h1 className="text-xl font-bold">EssafaAbdoGym</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;