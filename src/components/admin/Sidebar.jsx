function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <nav className="space-y-4">
        <p>Dashboard</p>
        <p>Products</p>
        <p>Orders</p>
        <p>Subscribers</p>
      </nav>
    </aside>
  );
}

export default Sidebar;