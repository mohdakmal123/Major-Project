// src/HomePage.js
'use client'
import React, { useState, useEffect  } from 'react';


const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to track dark mode

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

// Fetch business data when the component mounts
useEffect(() => {
  axios
    .get('http://localhost:5000/template/getall')
    .then((response) => {
      console.log(response.data);

      setData(response.data);
      setFilteredData(response.data); // Initially show all data
    })
    .catch((err) => {
      console.log(err.response);
    });
}, []);

// Filter the businesses based on the search term
const handleSearch = () => {
  const filtered = data.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredData(filtered);
};



  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">ReactNet</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded transition duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-black hover:bg-gray-300'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className={`space-x-8 p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
        <a href="#about" className="hover:underline text-lg font-semibold">About Us</a>
        <a href="#hire" className="hover:underline text-lg font-semibold">Hire Us</a>
        <a href="#blog" className="hover:underline text-lg font-semibold">Blog</a>
        <a href="#support" className="hover:underline text-lg font-semibold">Support</a>
        <a href="signin" className="hover:underline text-lg font-semibold">Login</a>
        <a href="signup" className="hover:underline text-lg font-semibold">Signup</a>
        <a href="#feedback" className="hover:underline text-lg font-semibold">Feedback</a>
        <a href="#add-template" className="hover:underline text-lg font-semibold">Add Template</a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-between items-center my-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="hero-text font-bold text-5xl">React Template Website</h2>
            <p className="text-lg md:text-xl text-gray-500">Your one-stop solution for premium React templates.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src="https://i.pinimg.com/564x/1d/80/d6/1d80d63bc2a34e6c3cb43f9f8d379ebb.jpg"
              alt="React Template"
              className="w-1/2 md:w-3/5 lg:w-1/2 h-auto"
            />
          </div>
        </section>

        {/* Latest Offers Button */}
        <div className="my-8 text-center">
          <a href="#offers" className="bg-blue-600 p-3 rounded hover:bg-blue-700">
            Latest Offers
          </a>
        </div>

        {/* Offer Cards Section */}
        <section id="offers" className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {Array(3).fill().map((_, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
            >
              <h3 className="text-xl font-bold text-center">React Template {index + 1}</h3>
              <p className="text-center">Description of the template.</p>
              <p className="text-lg font-semibold text-center">$49</p>
            </div>
          ))}
        </section>

        {/* Latest Templates Section */}
        <section id="products" className="py-16 "
        style={{
          backgroundImage:
            'url("https://scontent.flko5-1.fna.fbcdn.net/o1/v/t0/f1/m250/upload_img_32995991_09_17_2024_02_39_55_926153_946479994681188210.jpeg?_nc_ht=scontent.flko5-1.fna.fbcdn.net&_nc_cat=101&ccb=9-4&oh=00_AYDug_H8hbFFLYbByXMOrj2NJkw-pBhDOGdl15n0m5hzwg&oe=66EB19F6&_nc_sid=5b3566")'

        }}
      >
        <div className="container mx-auto"

        >
           <h3 className=" w-96 mx-auto text-3xl text-center text-white shadow-md p-2 mb-4 font-bold bg-green-800 rounded-lg">Our Latest Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredData.map((template, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={template.image} alt={template.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-bold mb-2 text-green-700">{template.name}</h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-blue-500">₹{template.price}</p>
                <Link href={'/details/' + template._id} className="text-green-600 hover:text-green-800 hover:underline text-lg md:text-md lg:text-xl font-semibold flex items-center space-x-2 transition-colors duration-300">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center">Why Choose Our React Template Website?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
            {[
              { title: "Friendly Support", description: "We offer 24/7 support to assist you with any queries." },
              { title: "Modern Designs", description: "Our templates are built with modern design trends." },
              { title: "Regular Updates", description: "We regularly update our templates with new features." },
              { title: "Easy Setup", description: "Get started quickly with easy installation." },
              { title: "Powerful Admin Panel", description: "Manage your site effortlessly with our admin panel." },
              { title: "Well Documented", description: "Comprehensive documentation for a smooth experience." },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transform transition duration-300 hover:bg-gray-200 hover:shadow-lg flex flex-col items-center justify-center text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black border border-gray-300'}`}
              >
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center">User Reviews and Ratings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
            {Array(3).fill().map((_, index) => (
              <div key={index} className={`p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                <p className="text-xl">⭐⭐⭐⭐⭐</p>
                <p className="text-center">`&quot;`This is a review from a user.`&quot;`</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-center">
            {["What is a React Template?", "How do I install the template?", "Can I customize the template?"].map((question, index) => (
              <div key={index} className={`p-2 rounded-lg my-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black border border-gray-300'}`}>
                <h3 className="font-bold text-center">{question}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>This is the answer to the question.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`p-4 text-center ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
        <div className="mb-2">
          <p>&copy; 2024 ReactNet. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#support" className="hover:underline">Support</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
