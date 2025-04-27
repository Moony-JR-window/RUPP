import React from "react";

const ListApiRent = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">User List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">#</th>
            <th className="border-b p-4 text-left">Name</th>
            <th className="border-b p-4 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border-b p-4">{user.id}</td>
              <td className="border-b p-4">{user.name}</td>
              <td className="border-b p-4">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListApiRent;
