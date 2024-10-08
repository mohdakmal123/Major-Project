'use client';

import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post('/api/contact', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Message sent successfully!');
    } catch (err) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-300 flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-6xl">
        {/* Left Section - Map and Contact Info */}
        <div className="lg:w-1/2 bg-gray-900 p-10 relative">
          <div className="absolute inset-0 bg-cover opacity-20" style={{ backgroundImage: `url('/path/to/map-image.jpg')` }}></div>
          <h2 className="text-3xl font-bold mb-4">Contact us</h2>
          <p className="mb-6">
            Look at Google Maps
          </p>
          <div className="space-y-4">
            <div>
              <p>Our Office</p>
              <p>123456 Moscow</p>
              <p>Lane Duskynov, building 4 office 202</p>
            </div>
            <div>
              <p>Our Contacts</p>
              <p>hello@yourdomain.com</p>
              <p>+7 900 800 80 60</p>
            </div>
          </div>
          <div className="absolute bottom-10 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Instagram</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/2 bg-white p-10">
          <h3 className="text-2xl font-bold mb-6 text-black">Feedback Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                placeholder="e.g., John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                placeholder="e.g., +7 900 800 80 60"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-black text-white rounded-md hover:bg-gray-700 transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
