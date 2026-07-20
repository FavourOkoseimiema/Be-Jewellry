import Sidebar from "./Sidebar";
import DashboardCards from "./DashboardCards";
import AddProductForm from "./AddproductForm";
import ProductTable from "./ProductTable";
import OrderTable from "./OrderTable";
import SubscriberTable from "./Subscribertable";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-stone-950 text-stone-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <DashboardCards />

        <AddProductForm />

        <ProductTable />

        <OrderTable />

        <SubscriberTable />
      </main>
    </div>
  );
}

export default AdminDashboard;