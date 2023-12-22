import React from "react";

const Footer = ()=>{
  const currentYear = new Date().getFullYear();
    return(
      <footer className="bg-gray-200 py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-gray-600">&copy; {currentYear} Your Website</p>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="/services" className="text-gray-600 hover:text-gray-900">Services</a></li>
          {/* Add more links or modify them as needed */}
        </ul>
      </div>
    </footer>
    
    );
}
export default Footer;