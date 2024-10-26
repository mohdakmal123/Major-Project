'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  // Fetch product details from the server
  const fetchDetails = async () => {
    try {
      const res = await axios.get('http://localhost:5000/template/getbyid/' + id);
      setSelectedTemplate(res.data);
    } catch (err) {
      setError('Error fetching  details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  // Placeholder for when no image is available
  const placeholderImage = 'https://via.placeholder.com/300';

  return (
    <div className="bg-gradient-to-b from-green-300 to-blue-300 min-h-screen p-8 flex flex-col justify-center items-center"
    style={{
      backgroundImage:
        'url("")'

    }}
    >
      <h1 className="text-5xl text-center text-white shadow-lg p-4 mb-8 font-bold bg-green-800 rounded-lg">
        React Template Details
      </h1>

      <div className="w-full max-w-4xl p-4 rounded-lg border transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6"
     
      >
        {/* Template Details */}
        {loading ? (
          <p className="text-xl text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          selectedTemplate && (
            <div classname="rounded-lg border transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">
              
              <div className="">
                {/* Image Section */}
                <div className="col-span-4 flex justify-center">
                  <img
                    src={selectedTemplate.image || placeholderImage}
                    alt={selectedTemplate.name}
                    className="w-80 h-80 object-cover rounded-lg shadow-lg transition-transform transform "
                  />
                </div>

                {/* Product Info Section */}
                <div className="text-5xl text-center text-white shadow-lg p-4 mb-8 font-bold  rounded-lg">
                  <div className="mb-4">
                    <p className="font-bold text-2xl text-black">
                  
                      <span className="block mt-1 font-bold text-black">{selectedTemplate.name}</span>
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="font-bold text-xl text-black">
                      Description:
                      <span className="block mt-1 text-gray-600">{selectedTemplate.description}</span>
                    </p>
                  </div>

                  <div className="">
                    <p className="font-bold text-xl text-black">
                      Price:
                      <span className="block mt-1 text-green-600">₹ {selectedTemplate.price}</span>
                    </p>
                  </div>

                  {/* Buy Now Button */}
                  
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
