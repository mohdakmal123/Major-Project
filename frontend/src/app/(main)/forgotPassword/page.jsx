'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';



const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
   
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          console.log(result.data);
          if (result.data.role === 'admin') {
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('user', JSON.stringify(result.data));
            document.cookie = `token=${result.data.token}`;
            router.push('/admin/add-template');
          } else {
            router.push('/');
          }
          toast.success('Email Sent Successfully');
        }).catch((err) => {
          toast.error('Some Error Occurred');
        });
    },
  });


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('A password reset link has been sent to your email');
      // Simulate sending email request (you can integrate an API request here)
      setTimeout(() => {
        setSuccessMessage('Check your email for further instructions.');
      }, 2000);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-lime-200">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Forgot Password</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6 ">
          <label htmlFor="email" className="block text-gray-700 mb-2">Enter your email address</label>
          <input 
            type="email" 
            id="email" 
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500" 
            placeholder="Enter your email" 
          />
        </form>

        {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
        {successMessage && <div className="text-green-500 text-sm mt-2">{successMessage}</div>}

        <button 
          onClick={handleResetPassword} 
          className="w-full bg-lime-500 text-white py-2 rounded-xl hover:bg-lime-600 transition duration-300"
        >
          Send Reset Link
        </button>

        <div className="text-center mt-6">
          <a href="/signin" className="text-lime-500 hover:underline">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
