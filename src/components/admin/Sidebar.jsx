function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-64 bg-black text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <nav className="space-y-4">

        <button
          onClick={() => setActivePage("dashboard")}
          className={`block w-full text-left p-2 rounded ${
            activePage === "dashboard"
              ? "bg-amber-500 text-black"
              : "hover:bg-stone-800"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage("products")}
          className={`block w-full text-left p-2 rounded ${
            activePage === "products"
              ? "bg-amber-500 text-black"
              : "hover:bg-stone-800"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActivePage("orders")}
          className={`block w-full text-left p-2 rounded ${
            activePage === "orders"
              ? "bg-amber-500 text-black"
              : "hover:bg-stone-800"
          }`}
        >
          Orders
        </button>

        <button
          onClick={() => setActivePage("subscribers")}
          className={`block w-full text-left p-2 rounded ${
            activePage === "subscribers"
              ? "bg-amber-500 text-black"
              : "hover:bg-stone-800"
          }`}
        >
          Subscribers
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;