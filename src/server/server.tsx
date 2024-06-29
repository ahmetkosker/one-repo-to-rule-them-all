require("dotenv").config();

import express from "express";
import compression from "compression";
import path from "path";
import { createDynamicRoute } from "./routing/createDynamicRoute";
import Home from "../client/pages/Home/Home";
import Book from "../client/pages/Book/Book";
import {
  getBookById,
  getBooks,
  getCharacters,
  getMovies,
} from "../client/helper/api";
import BookDetail from "../client/pages/BookDetail/BookDetail";
import Movie from "../client/pages/Movie/Movie";
import Character from "../client/pages/Character/Character";

const app = express();
const PORT = 3013;

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
      title: `Book ${data.docs[0].name}`,
      description: `Details for book ${data.docs[0].name}`,
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
    path: "/character",
    id: "Character",
    component: Character,
    generateMetatag: () => ({ title: "Character", description: "Character" }),
    fetchInitialData: async () => {
      const data = await getCharacters(10, 1);
      return { data };
    },
  }),
);

app.use(
  createDynamicRoute({
    path: "/character",
    id: "Character",
    component: Character,
    generateMetatag: () => ({ title: "Character", description: "Character" }),
    fetchInitialData: async () => {
      const data = await getCharacters(10, 1);
      return { data };
    },
  }),
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
