import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-4 border-blue-300 text-center fixed top-0 bg-blue-900 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block float-left py-4 ml-5 from-gray-400	">
          <h1 className="bg-gradient-to-r from-black-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            WebTech
          </h1>
        </li>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/articles-list" className="pl-6 pr-8">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
