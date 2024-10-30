	
				'use client';
        import React, { useState, useEffect } from "react";
        import Link from 'next/link';
        import { Button } from "@/components/ui/button";
        import axios from 'axios';
        import {
            Card,
            CardContent,
            CardFooter,
            CardHeader,
            CardTitle,
        } from "@/components/ui/card";
        import { Search, ShoppingCart } from "lucide-react";
        
        const HomePage = () => {
            const [templateList, setTemplateList] = useState([]);
        
            const templatesData = async () => {
                const res = await axios.get('http://localhost:5000/template/getall');
                console.log(res.status);
                console.table(res.data);
                setTemplateList(res.data);
            }
        
            useEffect(() => {
                templatesData();
            }, []);
        
  return (
    <div>

      
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">

          
          <a
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            href="signin"
          >
            Login
          </a>
          <a
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            href="signup"
          >
            SignUp
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4  py-3 px-4"
            href="About"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4  py-3 px-4"
            href="ContactUs"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full mx-auto py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/564x/a6/5f/bb/a65fbb897ddfffd954551360dd68f3e0.jpg")',
          }}
        >
          <div className="container px-4 md:px-6 mx-auto"

          >
            <div className="flex flex-col items-center space-y-4 text-center">

              
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to TemplateWave
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover amazing templates across various categories. Shop now and
                  enjoy great deals!
                </p>
              </div>
              <div className="space-x-4">
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                  href="browse-template"
                >
                  All Templates
                </a>
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                  href="AboutUs"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Featured Templates
                        </h2>
                        <div className="flex flex-col space-y-6 p-6 ">
                            {templateList.map((templates) => (
                                <div key={templates.id} className="rounded-lg border transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight">{templates.name}</h3>
                                    <img
                                        src={templates.image}
                                        alt={templates.name}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <p className="text-black font-bold  mb-4">₹{templates.price}</p>
                                    <Button className="flex justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded  w-24">
                                        Add to Cart
                                    </Button>
                                    <Link href={'/template-details/' + templates._id} className="text-center mt-2"> {/* Centering View More */}
                            View More
                        </Link>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
				


                <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
            {templateList.map((templates) => (
                <div
                    key={templates.id}
                    className="rounded-lg border transform hover:scale-105 transition-transform duration-200 bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6"
                >
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">{templates.name}</h3>
                    <img
                        src={templates.image}
                        alt={templates.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex flex-col items-center mt-auto"> {/* Centering the buttons */}

                    <p className="text-black font-bold mb-4">₹{templates.price}</p>

                        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded w-full">
                            Add to Cart
                        </Button>
                        <Link href={'/template-details/' + templates._id} className="text-center mt-2"> {/* Centering View More */}
                            View More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

      </main>

    {/* footer */}
      <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo and description */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">My Website</h2>
            <p className="text-gray-300">
              Your go-to platform for all things awesome. Connect, explore, and enjoy!
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between">
            {/* Column 1 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Support</h3>
              <ul>
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center md:text-left">
          <p className="text-gray-300">&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>


    </div>
  )
}

export default HomePage;