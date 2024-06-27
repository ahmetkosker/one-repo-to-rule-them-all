require("dotenv").config();

import express from "express";
import compression from "compression";
import path from "path";
import { createDynamicRoute } from "./routing/createDynamicRoute";
import Home from "../client/pages/Home/Home";
import User from "../client/pages/User/User";
import Book from "../client/pages/Book/Book";
import { getBookById, getBooks, getMovies } from "../client/helper/api";
import BookDetail from "../client/pages/BookDetail/BookDetail";
import Movie from "../client/pages/Movie/Movie";

const app = express();
const PORT = 3012;

app.use(compression());
app.use(
  "/dist",
  express.static(path.join(__dirname, "..", "..", "client", "dist")),
);

app.use(
  createDynamicRoute({
    path: "/",
    id: "Home",
    component: Home,
    generateMetatag: () => ({
      title: "One repo to rule them all!",
      description: "One repo to rule them all!",
    }),
  }),
);

app.use(
  createDynamicRoute({
    path: "/book",
    id: "Book",
    component: Book,
    generateMetatag: () => ({ title: "Books", description: "Books" }),
    fetchInitialData: async () => {
      const data = await getBooks(10, 1);

      return { data };
    },
  }),
);

app.use(
  createDynamicRoute({
    path: "/book/:id",
    id: "BookDetail",
    component: BookDetail,
    generateMetatag: (data) => ({
      title: `Book ${data.id}`,
      description: `Details for book ${data.id}: ${data.title}`,
    }),
    fetchInitialData: async (params) => {
      const { id } = params || {};

      const data = await getBookById(id);

      return { data };
    },
  }),
);

app.use(
  createDynamicRoute({
    path: "/movie",
    id: "Movie",
    component: Movie,
    generateMetatag: () => ({ title: "Movies", description: "Movies" }),
    fetchInitialData: async () => {
      const data = await getMovies(10, 1);
      return { data };
    },
  }),
);

app.use(
  createDynamicRoute({
    path: "/user/:id",
    id: "User",
    component: User,
    generateMetatag: (data) => ({
      title: `User ${data.id}`,
      description: `Details for user ${data.id}: ${data.title}`,
    }),
    fetchInitialData: async (params) => {
      const { id } = params || {};

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );

      const data = await response.json();

      return { data };
    },
  }),
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
