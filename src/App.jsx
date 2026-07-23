import { Routes, Route } from "react-router-dom";

import JewelryWebsite from "./Jewelry";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import Register from "./components/pages/Register"
import Login from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JewelryWebsite />} />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;