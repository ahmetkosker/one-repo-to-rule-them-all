import React from "react";
import Navbar from "../../components/shared/Navbar";

interface BookProps {
  data: any;
}

const Book: React.FC<BookProps> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Book's Page
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.docs.map((book: { _id: string; name: string }) => (
            <a
              href={`book/${book._id}`}
              key={book._id}
              className="block rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {book.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
