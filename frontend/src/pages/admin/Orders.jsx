function Orders() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-[#005746] mb-6">
        Orders
      </h1>

      <div className="bg-white shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Products</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">#1001</td>
              <td className="p-3">Meem</td>
              <td className="p-3">Snake Plant</td>
              <td className="p-3">৳450</td>
              <td className="p-3">Completed</td>
            </tr>

            <tr>
              <td className="p-3">#1002</td>
              <td className="p-3">Sadaf</td>
              <td className="p-3">Money Plant</td>
              <td className="p-3">৳350</td>
              <td className="p-3">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;