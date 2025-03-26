"use client";
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

// Simulated data for browsing items
const TemplateCart = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);


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



    const handlePayment = () => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        amount: 1000, // Amount in paisa (1000 = ₹10)
        currency: 'INR',
        name: 'Sample Product',
        description: 'A great product to buy',
        image: 'https://via.placeholder.com/150',
        handler: function (response) {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  






  return (
    <div className="min-h-screen bg-lime-200">
      
      {/* Navbar */}
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-sans font-bold justify justify-center text-center">Browse Template</h1>
         
        </div>
      </nav>

      {/* Search Bar and Items */}
      <main className="container mx-auto my-8 px-4">
        {/* Search Input */}
        

        {/* Browse Items */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templateList.map((templates) => (
            <Card className='bg-white rounded-2xl' key={templates.id}>
              <CardHeader>
              <img
                            src={templates.image}
                            alt={templates.name}
                            className="w-full h-40 object-cover  mb-4 rounded"
                        />

                <CardTitle>{templates.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">{templates.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-green-600 font-semibold">
                  ${templates.price}
                </span>
                
                <Link href={'/template-details/'+templates._id}>View More</Link>


                
                <button id="buyNow" className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded">Buy Now</button>




                
              </CardFooter>
            </Card>
          ))}
        </div>

        {templateList.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No items found. Try a different search term.
          </p>
        )}
      </main>
    </div>
  );
}

export default TemplateCart;
