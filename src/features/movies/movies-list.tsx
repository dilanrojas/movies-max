import MovieCard from "./movie-card";
import { useState, useEffect } from 'react';
import { getMovies } from '../../services/movies.service';
import { type Movie } from "../../lib/types";

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false))
  }, [movies]);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section className="wrapper mx-auto py-16">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold dark:text-cyan-400 tracking-tight sm:text-4xl">
            Featured Titles
          </h1>
          <p className="mt-2 text-lg dark:text-zinc-400">
            Explore our curated selection of movies.
          </p>
        </div>
      </div>

      {movies && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {movies.map(movie => (
            <li key={movie.id} className="list-none">
              <MovieCard
                {...movie}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
