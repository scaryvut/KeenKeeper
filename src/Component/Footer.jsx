import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-3">KeenKeeper</h1>
        <p className="text-sm text-gray-300 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h3 className="mb-3 font-semibold">Social Links</h3>
        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <FaYoutube />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <FaXTwitter />
          </div>
        </div>
        <hr className="border-gray-600 mb-4" />
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 justify-center mt-2 md:mt-0">
            <span>
              Privacy Policy
            </span>
            <span>
              Terms of Service
            </span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
