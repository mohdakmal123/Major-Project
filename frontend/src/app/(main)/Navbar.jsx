"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

const Header = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  return (
    <header className="bg-red-400 text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-mono font-bold">TemplateWave</h1>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 w-full rounded-lg"
          />
          <Search className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Home Dropdown */}
          <div className="relative">
            <Button
              variant="link"
              onClick={toggleHomeDropdown}
              className="flex items-center space-x-2"
            >
              <span>Home</span>
              <Menu className="h-5 w-5" />
            </Button>

            {isHomeDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                <Link href="/login">
                  <p className="block px-4 py-2 hover:bg-gray-200">Login</p>
                </Link>
                <Link href="/signup">
                  <p className="block px-4 py-2 hover:bg-gray-200">Signup</p>
                </Link>
              </div>
            )}
          </div>

          {/* More Dropdown */}
          <div className="relative">
            <Button
              variant="link"
              onClick={toggleMoreDropdown}
              className="flex items-center space-x-2"
            >
              <span>More</span>
              <Menu className="h-5 w-5" />
            </Button>

            {isMoreDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
                <Link href="/about">
                  <p className="block px-4 py-2 hover:bg-gray-200">About Us</p>
                </Link>
                <Link href="/contact">
                  <p className="block px-4 py-2 hover:bg-gray-200">Contact</p>
                </Link>
                <Link href="/services">
                  <p className="block px-4 py-2 hover:bg-gray-200">Services</p>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
