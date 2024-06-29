import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/shared/Navbar";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          About This Page
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          This page is created using Node.js for server-side rendering (SSR).
        </p>
        <p className="mb-4 text-lg text-gray-600">
          Server-side rendering (SSR) is a method to generate HTML from React
          components on the server, improving performance and SEO.
        </p>
        <p className="text-lg text-gray-600">
          Data on this page is fetched from the Lord of the Rings API,
          showcasing the flexibility and power of combining different
          technologies
        </p>
      </div>
    </section>
  );
};

export default Home;
