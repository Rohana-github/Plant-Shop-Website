function Users() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-[#005746] mb-6">
        Users
      </h1>

      <div className="bg-white shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Total Bill</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">Meem</td>
              <td className="p-3">meem@gmail.com</td>
              <td className="p-3">5</td>
              <td className="p-3">৳2450</td>
            </tr>

            <tr>
              <td className="p-3">Sadaf</td>
              <td className="p-3">sadaf@gmail.com</td>
              <td className="p-3">3</td>
              <td className="p-3">৳1350</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;