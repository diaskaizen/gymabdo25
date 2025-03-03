import React, { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">سجل الحضور</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="بحث عن عضو..."
              className="w-full pl-4 pr-10 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">الاسم</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">وقت الحضور</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">التاريخ</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">حالة الدفع</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">تسجيل حضور</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Sample attendance row */}
              <tr>
                <td className="px-6 py-4">أحمد محمد</td>
                <td className="px-6 py-4">09:30 ص</td>
                <td className="px-6 py-4">2024/02/28</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    مدفوع
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-800">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;