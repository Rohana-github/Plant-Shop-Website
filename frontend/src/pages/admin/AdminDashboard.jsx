import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    revenue: 0,
    recentOrders: [],
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await API.get("/dashboard");
        setStats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStats();
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
          <p className="text-sm text-[#005746]/70 mt-1">
            Welcome back, Admin
          </p>
        </div>

        <Link
          to="/"
          className="bg-[#005746] text-white px-5 py-3 hover:bg-[#004638] duration-300 text-center"
        >
          Back Home
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746] rounded-xl">
          <p className="text-sm text-gray-500">Total Products</p>
          <h3 className="text-3xl font-semibold mt-2">
            {stats.totalProducts}
          </h3>
        </div>

        <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746] rounded-xl">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h3 className="text-3xl font-semibold mt-2">
            {stats.totalOrders}
          </h3>
        </div>

        <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746] rounded-xl">
          <p className="text-sm text-gray-500">Total Users</p>
          <h3 className="text-3xl font-semibold mt-2">
            {stats.totalUsers}
          </h3>
        </div>

        <div className="bg-white p-6 shadow-lg border-l-4 border-[#005746] rounded-xl">
          <p className="text-sm text-gray-500">Revenue</p>
          <h3 className="text-3xl font-semibold mt-2">
            ৳{stats.revenue}
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white shadow-lg p-6 rounded-xl mb-10">
        <h3 className="text-2xl font-medium mb-6 text-[#005746]">
          Dashboard Overview
        </h3>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { name: "Products", total: stats.totalProducts },
                { name: "Orders", total: stats.totalOrders },
                { name: "Users", total: stats.totalUsers },
                { name: "Revenue", total: stats.revenue },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#005746" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow-lg p-6 mb-10 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-medium">Recent Orders</h3>

          <Link
            to="/admin/orders"
            className="underline hover:text-[#004638]"
          >
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
              {stats.recentOrders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-[#eefaf7] duration-200"
                >
                  <td className="p-4">#{order._id.slice(-4)}</td>
                  <td className="p-4">{order.customerName}</td>
                  <td className="p-4">৳{order.totalAmount}</td>
                  <td className="p-4 font-medium">{order.status}</td>
                </tr>
              ))}

              {stats.recentOrders.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No recent orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h3 className="text-2xl font-medium mb-6">Quick Actions</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            to="/admin/add-product"
            className="bg-[#005746] text-white text-center py-4 rounded-lg hover:bg-[#004638] duration-300"
          >
            Add Product
          </Link>

          <Link
            to="/admin/products"
            className="border border-[#005746] text-center py-4 rounded-lg hover:bg-[#eefaf7] duration-300"
          >
            Manage Products
          </Link>

          <Link
            to="/admin/orders"
            className="border border-[#005746] text-center py-4 rounded-lg hover:bg-[#eefaf7] duration-300"
          >
            Manage Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;