import { useEffect, useState } from "react";
import api from "../../../services/api";

function DashboardCards() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    featuredProducts: 0,
    totalOrders: 0,
    totalSubscribers: 0,
  });

  useEffect(() => {
    const fetchDashboardStats = async () => {
      console.log("Fetching Dashboard Stats here........");
      try {
        const response = await api.get("/dashboard/stats");
        console.log(":DASHBOARD STATS:", response.data);
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error.response?.data || error.message);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div className="bg-stone-900 p-6 rounded">
        <p className="text-stone-400 text-sm">Total Products</p>
        <h2 className="text-3xl font-bold mt-2">
          {stats.totalProducts}
        </h2>
      </div>

      <div className="bg-stone-900 p-6 rounded">
        <p className="text-stone-400 text-sm">Featured Products</p>
        <h2 className="text-3xl font-bold mt-2">
          {stats.featuredProducts}
        </h2>
      </div>

      <div className="bg-stone-900 p-6 rounded">
        <p className="text-stone-400 text-sm">Total Orders</p>
        <h2 className="text-3xl font-bold mt-2">
          {stats.totalOrders}
        </h2>
      </div>

      <div className="bg-stone-900 p-6 rounded">
        <p className="text-stone-400 text-sm">Subscribers</p>
        <h2 className="text-3xl font-bold mt-2">
          {stats.totalSubscribers}
        </h2>
      </div>
    </section>
  );
}

export default DashboardCards;