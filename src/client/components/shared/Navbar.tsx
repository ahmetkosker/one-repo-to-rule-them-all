import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.imgbin.com/7/3/12/imgbin-gandalf-the-lord-of-the-rings-the-fellowship-of-the-ring-legolas-gandalf-transparent-lord-of-the-rings-gandalf-QDRf1GxG2K3kG0Tu3YRfVpqYk.jpg"
              alt="logo"
              className="h-8 w-8 bg-red-500"
            />
          </div>
          <div className="hidden md:flex">
            <a
              href="/"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="/book"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Books
            </a>
            <a
              href="/movie"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Movies
            </a>
            <a
              href="/character"
              className="rounded-md px-3 py-2 text-white hover:bg-gray-700"
            >
              Characters
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
