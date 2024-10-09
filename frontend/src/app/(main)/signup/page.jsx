'use client';
import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          console.log(result.status);
          toast.success('Signup Successfully');
        }).catch((err) => {
          toast.error('Some Error Occurred');
        });
    },
  });

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-black" 
      style={{
        backgroundImage: 'url("https://scontent.flko11-1.fna.fbcdn.net/v/t39.30808-6/460499278_453298471193103_1927094701927232585_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=o03zHfGyIMAQ7kNvgGfBtaL&_nc_ht=scontent.flko11-1.fna&_nc_gid=AzcTdhXjOp7qhZinHC-YaZC&oh=00_AYBJufMNffiU7fTyuVGKRKk3_9Y2bui8soGXpxByjIqQlw&oe=66F75FB2")'
      }}
    >
      <div className="p-12 max-w-lg mx-auto bg-white rounded-lg shadow-lg bg-opacity-80">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Signup</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
