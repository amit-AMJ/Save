import React from "react";
import { Link } from "react-router-dom";

const MobileNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-center px-6 py-8 space-y-4">
      <h1 className="text-5xl font-bold text-rose-600">404</h1>
      <h2 className="text-xl font-semibold text-gray-800">Not Found</h2>
      <p className="text-sm text-gray-600">
        Sorry, this mobile page doesn't exist.
      </p>
      <Link
        to="/vehicle-loan"
        className="inline-block mt-4 bg-rose-600 text-white px-4 py-2 rounded-xl text-sm shadow hover:bg-rose-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default MobileNotFound;
