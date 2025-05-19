import React from "react";
import { Helmet } from "react-helmet";
import MobileLayout from "../../components/mobile/MobileLayout";

const VehicleLoan = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>vehicle Loan</title>
      </Helmet>

        <div className="flex flex-col justify-center items-center h-full p-4 space-y-4 text-center">
          <h1 className="text-xl font-bold">Special Mobile Page</h1>
          <p className="text-sm text-gray-600">
            This is optimized for mobile view only.
          </p>
        </div>

    </>
  );
};

export default VehicleLoan;
