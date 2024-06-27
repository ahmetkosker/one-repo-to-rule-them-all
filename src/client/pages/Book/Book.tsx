import React from "react";

interface BookProps {
  data: any;
}

const Book: React.FC<BookProps> = ({ data }) => {
  const users = data;

  return (
    <div>
      <h1>Book's Page</h1>
    </div>
  );
};

export default Book;
