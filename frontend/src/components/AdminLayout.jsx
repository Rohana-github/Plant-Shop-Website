import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eefaf7] text-[#005746]">
      {/* Top menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-[#005746] text-white px-4 py-2 text-2xl"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 min-h-screen bg-[#005746] text-white px-6 py-8 transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold mb-1 mt-10">Plantify</h1>
        <p className="text-xs italic text-white/70 mb-10">Admin Panel</p>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" onClick={() => setOpen(false)} className="block bg-white/15 px-4 py-3">
            Dashboard
          </Link>

          <Link to="/admin/products" onClick={() => setOpen(false)} className="block hover:bg-white/10 px-4 py-3 duration-300">
            Products
          </Link>

          <Link to="/admin/orders" onClick={() => setOpen(false)} className="block hover:bg-white/10 px-4 py-3 duration-300">
            Orders
          </Link>

          <Link to="/admin/users" onClick={() => setOpen(false)} className="block hover:bg-white/10 px-4 py-3 duration-300">
            Users
          </Link>

          <Link to="/admin/login" onClick={() => setOpen(false)} className="block hover:bg-white/10 px-4 py-3 duration-300">
            Logout
          </Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="px-6 md:px-10 py-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;