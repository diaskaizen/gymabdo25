import React, { useState, useEffect } from 'react';
import { Users, Calendar, TrendingUp, AlertCircle, Database } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Dashboard = () => {
  const navigate = useNavigate();  // Initialize navigate
  const [dashboardData, setDashboardData] = useState({
    totalMembers: 0,
    todayAttendance: 0,
    monthlyRevenue: "0 ج.م",
    latePayments: 0,
  });

  // Fetch dashboard data from the API
  useEffect(() => {
    axios.get('http://localhost:8000/api/dashboard-data/')  // Replace with your Django API endpoint
      .then(response => {
        setDashboardData({
          totalMembers: response.data.totalMembers,
          todayAttendance: response.data.todayAttendance,
          monthlyRevenue: response.data.monthlyRevenue,
          latePayments: response.data.latePayments,
        });
      })
      .catch(error => console.error("Error fetching dashboard data", error));
  }, []);

  const handleCardClick = (cardType) => {
    if (cardType === 'members') {
      navigate('/members');  // Navigate to members page
    } else if (cardType === 'attendance') {
      navigate('/attendance');  // Navigate to attendance page
    } else if (cardType === 'revenue') {
      navigate('/revenue');  // Navigate to revenue page
    } else if (cardType === 'payments') {
      navigate('/payments');  // Navigate to payments page
    } else if (cardType === 'database') {
      navigate('/database');  // Navigate to database page
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={Users}
          title="إجمالي الأعضاء"
          value={dashboardData.totalMembers}
          color="bg-blue-500"
          onClick={() => handleCardClick('members')}
        />
        <DashboardCard
          icon={Calendar}
          title="الحضور اليوم"
          value={dashboardData.todayAttendance}
          color="bg-green-500"
          onClick={() => handleCardClick('attendance')}
        />
        <DashboardCard
          icon={TrendingUp}
          title="إيرادات الشهر"
          value={dashboardData.monthlyRevenue}
          color="bg-purple-500"
          onClick={() => handleCardClick('revenue')}
        />
        <DashboardCard
          icon={AlertCircle}
          title="مدفوعات متأخرة"
          value={dashboardData.latePayments}
          color="bg-red-500"
          onClick={() => handleCardClick('payments')}
        />
        <DashboardCard
          icon={Database}
          title="قاعدة البيانات"
          value="View"
          color="bg-yellow-500"
          onClick={() => handleCardClick('database')}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">آخر الحضور</h2>
          {/* Attendance list will go here */}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">المدفوعات المتأخرة</h2>
          {/* Late payments list will go here */}
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon: Icon, title, value, color, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <div className="flex items-center gap-4">
        <div className={`${color} p-4 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-gray-600 text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;