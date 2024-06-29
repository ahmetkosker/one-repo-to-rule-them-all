import React from "react";


interface BookProps {
    data: any;
  }

const BookDetail: React.FC<BookProps> = ({ data }) => {
  console.log(data);
  return <div>asdasdasd</div>;
};

export default BookDetail;
