import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#eefaf7] text-[#005746]">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-[#005746] text-white px-6 py-8 hidden md:block">
          <h1 className="text-3xl font-bold mb-1">Plantify</h1>
          <p className="text-xs italic text-white/70 mb-10">Admin Panel</p>

          <nav className="space-y-4">
            <Link to="/admin/dashboard" className="block bg-white/15 px-4 py-3">
              Dashboard
            </Link>

            <Link to="/admin/products" className="block hover:bg-white/10 px-4 py-3 duration-300">
              Products
            </Link>

            <Link to="/admin/orders" className="block hover:bg-white/10 px-4 py-3 duration-300">
              Orders
            </Link>

            <Link to="/admin/users" className="block hover:bg-white/10 px-4 py-3 duration-300">
              Users
            </Link>

            <Link to="/admin/login" className="block hover:bg-white/10 px-4 py-3 duration-300">
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-10 py-8">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
              <p className="text-sm text-[#005746]/70 mt-1">
                Welcome back, Admin
              </p>
            </div>

            <Link
              to="/"
              className="bg-[#005746] text-white px-5 py-3 hover:bg-[#004638] duration-300"
            >
              Back Home
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746]">
              <p className="text-sm text-gray-500">Total Products</p>
              <h3 className="text-3xl font-semibold mt-2">25</h3>
            </div>

            <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746]">
              <p className="text-sm text-gray-500">Total Orders</p>
              <h3 className="text-3xl font-semibold mt-2">120</h3>
            </div>

            <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746]">
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-3xl font-semibold mt-2">85</h3>
            </div>

            <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746]">
              <p className="text-sm text-gray-500">Revenue</p>
              <h3 className="text-3xl font-semibold mt-2">৳45,500</h3>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white shadow-lg p-6 mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-medium">Recent Orders</h3>
              <Link to="/admin/orders" className="underline">
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#eefaf7]">
                  <tr>
                    <th className="p-4">Order ID</th>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="p-4">#1001</td>
                    <td className="p-4">Meem</td>
                    <td className="p-4">৳1,250</td>
                    <td className="p-4 text-green-600">Completed</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-4">#1002</td>
                    <td className="p-4">Sadia</td>
                    <td className="p-4">৳850</td>
                    <td className="p-4 text-yellow-600">Pending</td>
                  </tr>

                  <tr>
                    <td className="p-4">#1003</td>
                    <td className="p-4">Rafi</td>
                    <td className="p-4">৳1,520</td>
                    <td className="p-4 text-red-500">Cancelled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow-lg p-6">
            <h3 className="text-2xl font-medium mb-6">Quick Actions</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
                to="/admin/add-product"
                className="bg-[#005746] text-white text-center py-4 hover:bg-[#004638] duration-300"
              >
                Add Product
              </Link>

              <Link
                to="/admin/products"
                className="border border-[#005746] text-center py-4 hover:bg-[#eefaf7] duration-300"
              >
                Manage Products
              </Link>

              <Link
                to="/admin/orders"
                className="border border-[#005746] text-center py-4 hover:bg-[#eefaf7] duration-300"
              >
                Manage Orders
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;