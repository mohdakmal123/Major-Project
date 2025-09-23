'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const HomePage = () => {
  const [templateList, setTemplateList] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get("http://localhost:5000/template/getall");
      setTemplateList(res.data);
    };
    fetchTemplates();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-lime-500 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            TemplateWave
          </Link>
          <nav className="flex items-center gap-6 text-white font-medium">
            <Link href="/signin" className="hover:text-yellow-200 transition">
              Login
            </Link>
            <Link href="/signup" className="hover:text-yellow-200 transition">
              SignUp
            </Link>
            <Link href="/AboutUs" className="hover:text-yellow-200 transition">
              About
            </Link>
            <Link href="/ContactUs" className="hover:text-yellow-200 transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-lime-100 to-green-50 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800">
            Discover Premium Templates
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready-made designs for portfolios, businesses, and personal projects.
            Save time, customize easily, and launch faster.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/browse-template"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Browse Templates
            </Link>
            <Link
              href="/AboutUs"
              className="px-6 py-3 bg-green-600 text-white border border-green-600 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Featured Templates
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {templateList.map((template) => (
              <div
                key={template._id}
                className="rounded-xl border bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6 flex flex-col"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-52 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-green-700 font-bold mb-4">
                  ₹{template.price}
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition">
                    Buy Now
                  </button>
                  <div className="flex gap-2">
                    <Link
                      href={`/template-details/${template._id}`}
                      className="w-1/2 text-center bg-lime-200 hover:bg-lime-300 text-gray-800 py-2 rounded-lg transition"
                    >
                      View More
                    </Link>
                    <Link
                      href={`#${template._id}`}
                      className="w-1/2 text-center bg-purple-200 hover:bg-purple-300 text-gray-800 py-2 rounded-lg transition"
                    >
                      Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            New Arrivals
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templateList.map((template) => (
              <div
                key={template._id}
                className="rounded-xl border bg-white shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6 flex flex-col"
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-52 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-green-700 font-bold mb-4">
                  ₹{template.price}
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition">
                    Buy Now
                  </button>
                  <div className="flex gap-2">
                    <Link
                      href={`/template-details/${template._id}`}
                      className="w-1/2 text-center bg-purple-200 hover:bg-purple-300 text-gray-800 py-2 rounded-lg transition"
                    >
                      View More
                    </Link>
                    <Link
                      href={`#${template._id}`}
                      className="w-1/2 text-center bg-purple-200 hover:bg-purple-300 text-gray-800 py-2 rounded-lg transition"
                    >
                      Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">TemplateWave</h2>
            <p className="text-gray-200">
              Your go-to platform for premium templates. Design faster, launch
              smarter.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-200">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/AboutUs">About Us</Link></li>
              <li><Link href="/ContactUs">Contact</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="flex gap-4">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-6 border-t border-gray-600 pt-4">
          © 2025 TemplateWave. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
