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
      className="flex items-center justify-center min-h-screen bg-cover rounded-lg bg-black" 
      style={{
        backgroundImage: 'url("")'
      }}
    >
      <div className="p-14 max-w-lg mx-auto bg-gray-900 rounded-lg ">
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