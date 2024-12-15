import React, { useState } from "react";
import bc from './assets/eic.png'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: `url(${bc})` }}>
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-[83vh]" >
        <h2 className="text-center text-gray-800 text-2xl font-semibold mb-6">Create Account</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded bg-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded bg-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded bg-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-600 font-medium mb-2">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded bg-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="club_organizer">Club Organizer</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-gray-600 font-medium mb-2">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded bg-blue-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full p-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
