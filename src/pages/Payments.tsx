import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">المدفوعات</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">إجمالي المدفوعات</h3>
          <p className="text-3xl font-bold text-emerald-600">45,000 ج.م</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">المدفوعات المتأخرة</h3>
          <p className="text-3xl font-bold text-red-600">8,000 ج.م</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">مدفوعات اليوم</h3>
          <p className="text-3xl font-bold text-blue-600">3,500 ج.م</p>
        </div>
      </div>

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
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">المبلغ</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">تاريخ الدفع</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">تاريخ الاستحقاق</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Sample payment row */}
              <tr>
                <td className="px-6 py-4">أحمد محمد</td>
                <td className="px-6 py-4">300 ج.م</td>
                <td className="px-6 py-4">2024/02/01</td>
                <td className="px-6 py-4">2024/03/01</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    مدفوع
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">محمد علي</td>
                <td className="px-6 py-4">300 ج.م</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">2024/02/15</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                    متأخر
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;