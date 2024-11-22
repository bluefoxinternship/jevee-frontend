import React from "react";

const BrandHairCare = () => {
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
    {
      id: 4,
      name: "Brand 4",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
    {
      id: 5,
      name: "Brand 5",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
    {
      id: 6,
      name: "Brand 6",
      logo: "https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/161b8b54-b906-4435-b6c4-35d9bfd99637.webp",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Best Brands In Haircare
          </h2>
          <button className="text-blue-500 text-sm font-medium flex items-center hover:underline">
            View All Brands
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-100% h-100% object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHairCare;
