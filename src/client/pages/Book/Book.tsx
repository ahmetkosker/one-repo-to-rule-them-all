import React from "react";

interface BookProps {
  data: any;
}

const Book: React.FC<BookProps> = ({ data }) => {
  return (
    <div>
      <h1>Book's Page</h1>
      {data.docs.map((book: { _id: string; name: string }) => {
        return (
          <a href={`book/${book._id}`} key={book._id}>
            <h2>{book.name}</h2>
          </a>
        );
      })}
    </div>
  );
};

export default Book;
