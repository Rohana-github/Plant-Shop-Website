import { useEffect, useState } from "react";
import API from "../../api/axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
      alert("Orders load failed");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/orders/${id}/status`, { status });
      alert("Order status updated");
      getOrders();
    } catch (error) {
      console.log(error);
      alert("Status update failed");
    }
  };

  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      alert("Order deleted");
      getOrders();
    } catch (error) {
      console.log(error);
      alert("Order delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <h1 className="text-4xl font-bold text-[#005746] mb-8">
        Manage Orders
      </h1>

      <div className="bg-white shadow-xl p-6 rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-[#005746]">
              <th className="p-4">Customer</th>
              <th className="p-4">Email</th>
              <th className="p-4">Product</th>
              <th className="p-4">Qty</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-4">{order.customerName}</td>
                <td className="p-4">{order.customerEmail}</td>
                <td className="p-4">{order.productName}</td>
                <td className="p-4">{order.quantity}</td>
                <td className="p-4">৳{order.totalAmount}</td>

                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>

                <td className="p-4">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan="7" className="p-6 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;