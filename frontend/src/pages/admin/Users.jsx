import { useEffect, useState, useRef } from "react";
import API from "../../api/axios";

function Users() {
  const [users, setUsers] = useState([]);

  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const editFormRef = useRef(null);

  const getUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      alert("Users load failed");
    }
  };

  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      alert("User deleted");
      getUsers();
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);

    setFormData({
      name: user.name,
      email: user.email,
      role: user.role || "user",
    });

    setTimeout(() => {
      editFormRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/users/${editUser._id}`, formData);
      alert("User updated successfully");
      setEditUser(null);
      getUsers();
    } catch (error) {
      console.log(error);
      alert("Update failed");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#eefaf7] p-8">
      <h1 className="text-4xl font-bold text-[#005746] mb-8">
        Manage Users
      </h1>

      <div className="bg-white shadow-xl p-6 rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-[#005746]">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role || "user"}</td>

                <td className="p-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-600 text-white px-4 py-2 rounded mr-3"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="p-6 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editUser && (
        <div
          ref={editFormRef}
          className="mt-8 bg-white p-6 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#005746]">
            Edit User
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border p-3 rounded"
              placeholder="Name"
            />

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-3 rounded"
              placeholder="Email"
            />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full border p-3 rounded"
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>

            <button className="bg-[#005746] text-white px-5 py-2 rounded">
              Update
            </button>

            <button
              type="button"
              onClick={() => setEditUser(null)}
              className="ml-3 bg-gray-500 text-white px-5 py-2 rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Users;