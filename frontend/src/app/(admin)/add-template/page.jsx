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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB!');
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
    // Handle form submission logic (e.g., upload image, save data)
    console.log(formData);
    setMessage('Template added successfully!'); // Feedback message
    setFormData({
      title: '',
      description: '',
      name: '',
      email: '',
      image: null,
      codeSnippet: ''
    }); // Reset form
    setImagePreview(null); // Clear image preview
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl w-full">
          <h1 className="text-center text-3xl font-bold text-gray-700 mb-8">
            ADD TEMPLATE
          </h1>
          {message && <div className="text-green-500 text-center mb-4">{message}</div>}
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="text-lg font-semibold text-gray-700">
                Title:
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                id="title"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="text-lg font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                cols={30}
                rows={5}
                placeholder="Write your description..."
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg font-semibold text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-semibold text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="text-lg font-semibold text-gray-700">
                Upload Image:
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
                accept="image/*"
                required
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-4 rounded-md h-32 object-cover" />
              )}
            </div>
            <div>
              <label htmlFor="codeSnippet" className="text-lg font-semibold text-gray-700">
                Code Snippet:
              </label>
              <textarea
                id="codeSnippet"
                name="codeSnippet"
                cols={30}
                rows={5}
                placeholder="Write your code here..."
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.codeSnippet}
                onChange={handleChange}
                required
              />
            </div>
            <button className="w-full py-2 rounded-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200">
              ADD TEMPLATE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddTemplate;
