'use client'
import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/feedback', feedback);
      setResponseMessage('Thank you for your feedback!');
      setFeedback({
        name: '',
        email: '',
        message: '',
      });
    } catch (err) {
      setResponseMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black p-4"
      style={{ backgroundImage: `url('/path/to/your/image.jpg')`, backgroundSize: 'cover' }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-md max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-6">
          Feedback Form
        </h2>
        {responseMessage && (
          <p className="text-center text-sm mb-4 text-gray-300 bg-opacity-90 py-2 px-4 rounded-md border border-white">
            {responseMessage}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent text-gray-300 border border-white rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent text-gray-300 border border-white rounded-md focus:outline-none focus:border-gray-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-transparent text-gray-300 border border-white rounded-md focus:outline-none focus:border-gray-500"
              placeholder="Your feedback..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-transparent border border-white rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
