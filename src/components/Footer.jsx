import React from 'react';
import logo from '../assets/logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#001931] text-white py-10 px-5 sm:px-10 md:px-20 mt-10">
      <div className=" flex flex-col md:flex-row justify-between items-center md:items-start">
        <div>
          <figure className=" h-15 w-auto flex items-center gap-3">
            <img src={logo} alt="" className=" h-full w-auto object-contain" />
            <h1 className=" text-2xl font-bold">AppNest</h1>
          </figure>
        </div>
        <div className=" social-icons flex gap-5 my-5 md:my-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <aside>
        <p className=" text-center">Copyright © 2025 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
