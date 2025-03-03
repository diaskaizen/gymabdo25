import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Search, Edit, Trash } from "lucide-react";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/members/")
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const filteredMembers = members.filter((member) =>
    member.name.includes(searchTerm) || member.phone.includes(searchTerm)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">الأعضاء</h1>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
          <Plus className="w-5 h-5" />
          <span>إضافة عضو جديد</span>
        </button>
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
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">رقم الهاتف</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">تاريخ الانضمام</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">العمر</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">حالة الدفع</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4">{member.name}</td>
                  <td className="px-6 py-4">{member.phone}</td>
                  <td className="px-6 py-4">{member.join_date}</td>
                  <td className="px-6 py-4">{member.age}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      member.payment_status === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {member.payment_status === "paid" ? "مدفوع" : "غير مدفوع"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredMembers.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    لا يوجد أعضاء
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
