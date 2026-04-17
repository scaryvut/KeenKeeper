import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-xl">
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
