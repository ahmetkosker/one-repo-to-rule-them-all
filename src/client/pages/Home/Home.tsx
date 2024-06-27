import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-white">Logo</div>
          </div>
          <div className="hidden md:flex">
            <a
              href="#"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Services
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Home;
