import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "./DashboardCards";
import AddProductForm from "./AddproductForm";
import ProductTable from "./ProductTable";
import OrderTable from "./OrderTable";
import SubscriberTable from "./Subscribertable";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <main>
    <div className=" min-h-screen bg-stone-950 text-stone-200">
      {/* Sidebar */}
      <Sidebar
      activePage={activePage}
      setActivePage={setActivePage} />

      {/* Main Content */}
      {activePage === "dashboard" && (
  <DashboardCards />
)}

{activePage === "products" && (
  <>
    <AddProductForm />
    <ProductTable />
  </>
)}

{activePage === "orders" && (
  <OrderTable />
)}

{activePage === "subscribers" && (
  <SubscriberTable />
)}
    </div>
    </main>
  );
}

export default AdminDashboard;