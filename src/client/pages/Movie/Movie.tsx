import React from "react";
import Navbar from "../../components/shared/Navbar";
import { stringToSlug } from "../../functions/stringToSlug";

type DataProps = {
  data: Root;
};

export interface Root {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

const Movie: React.FC<DataProps> = ({ data }) => {
  const { docs: movies } = data;

  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-4xl p-4">
        <h2 className="mb-4 text-3xl font-bold">Movies</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <a
              href={`/movie/${stringToSlug(movie.name)}`}
              key={movie._id}
              className="overflow-hidden rounded-lg bg-white shadow-xl transition-all hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{movie.name}</h3>
                <p className="mb-2 text-gray-600">
                  Runtime: {movie.runtimeInMinutes} minutes
                </p>
                <p className="mb-2 text-gray-600">
                  Budget: ${movie.budgetInMillions} million
                </p>
                <p className="mb-2 text-gray-600">
                  Box Office Revenue: ${movie.boxOfficeRevenueInMillions}{" "}
                  million
                </p>
                <p className="mb-2 text-gray-600">
                  Award Nominations: {movie.academyAwardNominations}
                </p>
                <p className="mb-2 text-gray-600">
                  Award Wins: {movie.academyAwardWins}
                </p>
                <p className="mb-2 text-gray-600">
                  Rotten Tomatoes Score: {movie.rottenTomatoesScore}%
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Movie;
