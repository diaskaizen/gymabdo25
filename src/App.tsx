import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios"; // ✅ Import Axios
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Attendance from "./pages/Attendance";
import Payments from "./pages/Payments";

// Set Axios default base URL (API endpoint)
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex" dir="rtl">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
