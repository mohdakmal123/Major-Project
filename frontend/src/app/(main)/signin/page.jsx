'use client';

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Create validation schema using Yup
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const signupValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Handle form submission with JavaScript (Simulating API call)
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(isLogin ? "Login form data" : "Signup form data", values);

    // Simulate an API request using JavaScript's fetch function
    try {
      const response = await fetch(`/api/${isLogin ? 'login' : 'signup'}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Simulating different response statuses
      if (response.ok) {
        alert(`${isLogin ? "Login" : "Signup"} Successful!`);
      } else {
        alert(`${isLogin ? "Login" : "Signup"} Failed!`);
      }
    } catch (error) {
      console.error(`Error during ${isLogin ? 'login' : 'signup'}:`, error);
      alert("An error occurred. Please try again.");
    }

    setSubmitting(false); // Enable submit button again after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <Formik
          initialValues={isLogin ? { email: "", password: "" } : { name: "", email: "", password: "" }}
          validationSchema={isLogin ? loginValidationSchema : signupValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-white mb-2">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (isLogin ? "Logging in..." : "Signing up...") : (isLogin ? "Login" : "Sign Up")}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4">
          <button
            type="button"
            className="text-blue-400 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
