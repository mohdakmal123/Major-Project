'use client'
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import JsxParser from 'react-jsx-parser';
import StarRatings from 'react-star-ratings';

const TemplateDetails = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const { id } = useParams();

  const [rating, setRating] = useState(4)

  const reviewForm = useFormik({
    initialValues: {
      review: '',
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/review/add', values)
        .then((result) => {
          console.log(result.status);

          toast.success('Review added Successfully')
        }).catch((err) => {
          toast.error('Some Error Occured')
        });
    },
  })

  // Fetch product details from the server
  const fetchDetails = async () => {
    try {
      const res = await axios.get('http://localhost:5000/template/getbyid/' + id);
      console.log(res.data);

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
    <div className=" min-h-screen p-8 flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("")'

      }}
    >
      <h1 className="text-5xl text-center  text-black  p-4 mb-8 font-bold  rounded-lg">
        React Template Details
      </h1>

      <div className="w-full max-w-4xl rounded-lg border transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6"

      >
        {/* Template Details */}
        {loading ? (
          <p className="text-xl text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          selectedTemplate && (
            <div className="rounded-lg border bg-lime-200 transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">

              
                {/* Image Section */}
                <a className="col-span-4  flex justify-center">
                  <img
                    src={selectedTemplate.image || placeholderImage}
                    alt={selectedTemplate.name}
                    className="w-80 h-80 object-cover rounded-lg shadow-lg transition-transform transform "
                  />
                </a>

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
                      CodeSnippet:

                      {/* <span className="block mt-1 text-green-600">{selectedTemplate.codeSnippet}</span> */}
                      {/* <MyCodeBlock code={selectedTemplate.codeSnippet} language={jsx} /> */}


                    </p>
                  </div>

                  <div className="">
                    <p className="font-bold text-xl text-black">
                      Price:
                      <span className="block mt-1 text-green-600">₹ {selectedTemplate.price}</span>
                    </p>
                  </div>

                  <a className="">
                    <p className="font-bold text-xl text-black">
                      Downloads:
                      <span className="block mt-1 text-green-600">{selectedTemplate.downloads}</span>
                    </p>
                  </a>

                  {/* Buy Now Button */}
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                </div>
              </div>
           
          )
        )}
        {
          selectedTemplate !== null && (
            <div className='snippet'>
              <JsxParser jsx={selectedTemplate.codeSnippet} />
            </div>
          )
        }

        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={setRating}
          numberOfStars={5}
          name='rating'
        />
        <form onSubmit={reviewForm.handleSubmit}>
          <div>

            <h1>Reviews</h1>
            <textarea
              rows={10}
              className='w-full p-5 mt-4 border-2 rounded-md'
              name=""
              id="review"
              placeholder='Enter Your Review Here...'
              value={reviewForm.values.review}
              onChange={reviewForm.handleChange}
            ></textarea>
            <button type='submit'>Add Review</button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default TemplateDetails;
