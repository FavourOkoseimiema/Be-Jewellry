import { Routes, Route } from "react-router-dom";

import JewelryWebsite from "./Jewelry";
import AdminLogin from "./components/pages/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JewelryWebsite />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;