// api.ts
import { fetchData } from "./fetchData";

// /book endpoint with limit and page parameters
export const getBooks = async (limit?: number, page?: number) => {
  try {
    const res = await fetchData("/book", { limit, page });
    return res.data;
  } catch (error) {
    console.error("Error in getBooks:", error);
    throw error;
  }
};

// /book/{id} endpoint
export const getBookById = async (id: string) => {
  try {
    const res = await fetchData(`/book/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error in getBookById ${id}:`, error);
    throw error;
  }
};

// /book/{id}/chapter endpoint
export const getBookChapters = async (
  id: string,
  limit?: number,
  page?: number,
) => {
  try {
    const res = await fetchData(`/book/${id}/chapter`, { limit, page });
    return res.data;
  } catch (error) {
    console.error(`Error in getBookChapters ${id}:`, error);
    throw error;
  }
};

// /movie endpoint
export const getMovies = async (limit?: number, page?: number) => {
  try {
    const res = await fetchData("/movie", { limit, page });
    return res.data;
  } catch (error) {
    console.error("Error in getMovies:", error);
    throw error;
  }
};

// /movie/{id} endpoint
export const getMovieById = async (id: string) => {
  try {
    const res = await fetchData(`/movie/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error in getMovieById ${id}:`, error);
    throw error;
  }
};

// /movie/{id}/quote endpoint
export const getMovieQuotes = async (
  id: string,
  limit?: number,
  page?: number,
) => {
  try {
    const res = await fetchData(`/movie/${id}/quote`, { limit, page });
    return res.data;
  } catch (error) {
    console.error(`Error in getMovieQuotes ${id}:`, error);
    throw error;
  }
};

// /character endpoint with limit and page parameters
export const getCharacters = async (limit?: number, page?: number) => {
  try {
    const res = await fetchData("/character", { limit, page });
    return res.data;
  } catch (error) {
    console.error("Error in getCharacters:", error);
    throw error;
  }
};

// /character/{id} endpoint
export const getCharacterById = async (id: string) => {
  try {
    const res = await fetchData(`/character/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error in getCharacterById ${id}:`, error);
    throw error;
  }
};

// /character/{id}/quote endpoint
export const getCharacterQuotes = async (
  id: string,
  limit?: number,
  page?: number,
) => {
  try {
    const res = await fetchData(`/character/${id}/quote`, { limit, page });
    return res.data;
  } catch (error) {
    console.error(`Error in getCharacterQuotes ${id}:`, error);
    throw error;
  }
};

// /quote endpoint with limit and page parameters
export const getQuotes = async (limit?: number, page?: number) => {
  try {
    const res = await fetchData("/quote", { limit, page });
    return res.data;
  } catch (error) {
    console.error("Error in getQuotes:", error);
    throw error;
  }
};

// /quote/{id} endpoint
export const getQuoteById = async (id: string) => {
  try {
    const res = await fetchData(`/quote/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error in getQuoteById ${id}:`, error);
    throw error;
  }
};

// /chapter endpoint with limit and page parameters
export const getChapters = async (limit?: number, page?: number) => {
  try {
    const res = await fetchData("/chapter", { limit, page });
    return res.data;
  } catch (error) {
    console.error("Error in getChapters:", error);
    throw error;
  }
};

// /chapter/{id} endpoint
export const getChapterById = async (id: string) => {
  try {
    const res = await fetchData(`/chapter/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error in getChapterById ${id}:`, error);
    throw error;
  }
};
