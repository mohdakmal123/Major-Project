'use client';

import React, { useState } from 'react';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen flex items-center justify-center p-6 relative`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 py-2 px-4 rounded-md transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'}`}
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className={`w-full max-w-md rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <div className="p-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <p className="mb-6">
            {isLogin
              ? 'Sign in to access your account'
              : 'Create an account to get started'}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full p-3 border rounded-md focus:outline-none focus:border-purple-500 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'}`}
                />
              </div>
            )}
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 border rounded-md focus:outline-none focus:border-purple-500 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'}`}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-3 border rounded-md focus:outline-none focus:border-purple-500 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'}`}
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-md hover:bg-purple-600 transition-all duration-300 ${isDarkMode ? 'bg-purple-700' : 'bg-purple-500 text-white'}`}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6">
            <button
              onClick={toggleForm}
              className={`text-purple-400 hover:text-purple-200 underline transition-all duration-300`}
            >
              {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
