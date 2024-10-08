'use client';
import React, { useState } from 'react';

const AddTemplate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    email: '',
    image: '',
    codeSnippet: ''
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB!');
        e.target.value = ''; // Reset the file input
        return;
      }
      setFormData({ ...formData, [name]: file });
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setMessage('Template added successfully!');
    setFormData({
      title: '',
      description: '',
      name: '',
      email: '',
      image: null,
      codeSnippet: ''
    });
    setImagePreview(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen p-6 flex items-center justify-center`}>
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 py-2 px-4 rounded-md transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'}`}
      >
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <form onSubmit={handleSubmit} className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all duration-300 ease-in-out">
        <h1 className="text-center text-3xl font-bold mb-8">
          Add Template
        </h1>
        {message && <div className="text-green-500 text-center mb-4">{message}</div>}
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              id="title"
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              cols={30}
              rows={5}
              placeholder="Write your description..."
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-semibold">
              Upload Image:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className={`mt-2 w-full border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              onChange={handleChange}
              accept="image/*"
              required
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 rounded-md h-32 object-cover" />
            )}
          </div>
          <div>
            <label htmlFor="codeSnippet" className="block text-lg font-semibold">
              Code Snippet:
            </label>
            <textarea
              id="codeSnippet"
              name="codeSnippet"
              cols={30}
              rows={5}
              placeholder="Write your code here..."
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={formData.codeSnippet}
              onChange={handleChange}
              required
            />
          </div>
          <button className={`w-full py-3 px-6 rounded-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300`}>
            Add Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTemplate;
