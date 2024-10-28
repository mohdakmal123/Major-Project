export default function Footer() {
  return (
    <footer className="bg-red-400 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo and description */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">My Website</h2>
            <p className="text-black">
              Your go-to platform for all things awesome. Connect, explore, and enjoy!
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between">
            {/* Column 1 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="text-black hover:text-white">Home</a></li>
                <li><a href="#" className="text-black hover:text-white">About Us</a></li>
                <li><a href="#" className="text-black hover:text-white">Services</a></li>
                <li><a href="#" className="text-black hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Support</h3>
              <ul>
                <li><a href="#" className="text-black hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-black hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-black hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-black hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-black hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-black hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-black hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-black hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center md:text-left">
          <p className="text-black">&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
