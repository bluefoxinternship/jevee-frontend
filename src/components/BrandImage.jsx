import React from "react";
import products from "../data/product";

const BrandImage = ({ imageUrls }) => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Image */}
          <div className="relative">
            <img
              src="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/1c561fa8-37b3-43da-9249-1337b2243da5.webp"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg"></div>
          </div>

          {/* Second Image */}
          <div className="relative">
            <img
              src="https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/e7182f16-fcad-47fb-be8b-389e349f6423.webp"
              alt="Brand Pick 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandImage;
