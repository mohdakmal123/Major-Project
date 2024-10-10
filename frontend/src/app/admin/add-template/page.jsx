'use client'
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';


const AddTemplate = () => {

  const templateForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      name: '',
      author: '',
      image: '',
      codeSnippet: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/template/add', values)
        .then((result) => {
          console.log(result.status);

          toast.success('Template added Successfully')
        }).catch((err) => {
          toast.error('Some Error Occured')
        });
    },
  })
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  //upload (shahan@mail.com/1234)
  const handleUpload = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'dalzae2bg');
    axios.post('https://api.cloudinary.com/v1_1/dalzae2bg/image/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((result) => {
        console.log(result.data);
        toast.success('File Uploaded Successfully');
        templateForm.setFieldValue('image', result.data.url);

      }).catch((err) => {
        console.log(err);
        toast.error('Failed To Upload File');

      });
  }



  return (
    <div className={`min-h-screen p-6 flex items-center justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className={`py-2 px-4 rounded-md font-semibold transition-all duration-300 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <form
        onSubmit={templateForm.handleSubmit}
        className={`w-full max-w-xl p-6 shadow-lg rounded-lg transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      >
        <h1 className={`text-center text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Add Template
        </h1>
        {message && <div className="text-green-500 text-center mb-4">{message}</div>}

        <div className="space-y-6">
          <div>
            <label htmlFor="title" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              id="title"
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={templateForm.values.title}
              onChange={templateForm.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              cols={30}
              rows={5}
              placeholder="Write your description..."
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={templateForm.values.description}
              onChange={templateForm.handleChange}
              required
            />
          </div>



          <div>
            <label htmlFor="author" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Author:
            </label>
            <textarea
              id="author"
              name="author"
              cols={30}
              rows={5}
              placeholder="author..."
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={templateForm.values.author}
              onChange={templateForm.handleChange}
              required
            />
          </div>



          <div>
            <label htmlFor="name" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              value={templateForm.values.name}
              onChange={templateForm.handleChange}
              required
            />
          </div>



          <div>
            <label htmlFor="image" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Upload Image:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className={`mt-2 w-full border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              onChange={handleUpload}
              accept="image/*"
              required
            />

          </div>

          <div>
            <label htmlFor="codeSnippet" className={`block text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Code Snippet:
            </label>
            <textarea
              id="codeSnippet"
              name="codeSnippet"
              cols={30}
              rows={5}
              placeholder="Write your code here..."
              className={`w-full mt-2 p-2 border rounded-md focus:outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-800'} focus:ring-2 focus:ring-indigo-500`}
              onChange={templateForm.handleChange}
              value={templateForm.values.codeSnippet}
              required
            />
          </div>

          <button type="submit" className="w-full py-3 px-6 rounded-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300">
            Add Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTemplate;
