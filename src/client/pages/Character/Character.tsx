import React from "react";
import Navbar from "../../components/shared/Navbar";

const Character: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Characters
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.docs.map((item: any) => (
            <div
              key={item._id}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">
                Additional character details can go here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
