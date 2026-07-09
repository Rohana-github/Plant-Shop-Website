import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await API.get("/orders/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#eefaf7] pt-28 px-8 font-['Poppins']">
        <h1 className="text-4xl font-bold text-[#005746] mb-8">
          Order History
        </h1>

        <div className="bg-white rounded-2xl shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#005746] border-b">
                <th className="py-4">Product</th>
                <th className="py-4">Quantity</th>
                <th className="py-4">Amount</th>
                <th className="py-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-6 text-center">
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order._id} className="border-b">
                    <td className="py-4">
                      {order.items.map((item, index) => (
                        <div key={index}>{item.productName}</div>
                      ))}
                    </td>

                    <td className="py-4">
                      {order.items.map((item, index) => (
                        <div key={index}>{item.quantity}</div>
                      ))}
                    </td>

                    <td className="py-4">৳{order.totalAmount}</td>

                    <td className="py-4">{order.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;