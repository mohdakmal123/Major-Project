'use client';
import axios from 'axios';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';


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


    return (
        <div className="min-h-screen"
            style={{
                backgroundImage:
                    'url("https://scontent.flko11-1.fna.fbcdn.net/o1/v/t0/f1/m340/genai_m4_eag_odn_v3:upload_img_17193227_09_19_2024_06_40_03_598177_6791406858107519216.jpeg?_nc_ht=scontent.flko11-1.fna.fbcdn.net&_nc_cat=106&ccb=9-4&oh=00_AYDegP-PsFB0vpt25oNjJYH7gpyfrvs1yq2L4qiJGCV-kw&oe=66EE11F7&_nc_sid=5b3566")'

            }}
        >
            {/* Navbar */}
            <nav className="shadow-md p-4 flex justify-between items-center"
                style={{
                    backgroundImage:
                        'url("")'

                }}
            >
                <h1 className="text-2xl text-white font-bold">ReactTemplates</h1>

            </nav>


            {/*search bar */}
            <div className="flex items-center justify-center ">
                <div className="search-bar flex items-center bg-gray-800 rounded-lg px-1 py-2">
                    <form>
                        <input
                            type="search"
                            placeholder="Search Template..."
                            className="search-input w-full py-2 pl-10 text-sm text-gray-200 bg-transparent border-0 focus:ring-0"
                        />
                        <button
                            type="submit"
                            className="search-button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <rect x={8} y={8} width={8} height={8} rx={1} fill="#fff" />
                                <line x1={22} y1={22} x2={16} y2={16} />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>


            {/* Main Section with product Gallery */}


            <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {templateList.map((templates) => (
                    <div key={templates.id} className="bg-white rounded-lg shadow-md p-4"
                        style={{
                            backgroundImage:
                                'url("https://scontent.fknu1-6.fna.fbcdn.net/o1/v/t0/f1/m340/genai_m4_ldc_vll_v3:upload_img_30668748_09_18_2024_06_57_26_610985_4284689016845250713.jpeg?_nc_ht=scontent.fknu1-6.fna.fbcdn.net&_nc_cat=111&ccb=9-4&oh=00_AYDaKyzzPur78-SRVeUqO18W6v5y765z2jV-YJK7eSVeSw&oe=66ECB210&_nc_sid=5b3566")'

                        }}
                    >
                        <img
                            src={templates.image}
                            alt={templates.name}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h2 className="text-lg font-bold">{templates.name}</h2>
                        <p className="text-gray-500 mb-4">₹{templates.price}</p>
                        <Link href={'/template-details/'+templates._id}>View More</Link>
                    </div>
                ))}
            </section>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Your React Cart</h2>
                            <button
                                className="text-gray-500 hover:text-red-500"
                                onClick={() => setIsCartOpen(false)}
                            >
                                X
                            </button>
                        </div>

                        <div className="cart-items max-h-60 overflow-y-auto">
                            {cart.length === 0 ? (
                                <p className="text-gray-500">Your cart is empty</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center mb-4">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold">{item.name}</h3>
                                            <p>${item.price} x {item.quantity}</p>
                                        </div>
                                        <button
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="mt-4">
                            <h3 className="text-xl font-bold">
                                Total: ${totalAmount.toFixed(2)}
                            </h3>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateCart;
