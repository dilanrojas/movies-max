import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../../services/movies.service";
import type { Movie } from '../../lib/types';

const BackIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
  )
}

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    getMovieById(id)
      .then(setMovie)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p>Loading ...</p>
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Cinematic Backdrop */}
      <div className="absolute inset-0 h-[60vh] overflow-hidden">
        <img
          src={movie.image}
          alt=""
          className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto pt-32 px-6 grid md:grid-cols-[350px_1fr] gap-12">
        {/* Left Side: Poster */}
        <div className="group">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full rounded-2xl shadow-2xl shadow-cyan-500/10 border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Right Side: Info */}
        <div className="flex flex-col justify-start pb-12">
          <Link to='/movies' className='mb-10 hover:dark:text-cyan-500 w-fit'>
            <button className='cursor-pointer flex gap-2 items-center'><span><BackIcon /></span>Go back</button>
          </Link>
          <nav className="flex gap-2 mb-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Movies</Link>
            <span className="text-sm text-gray-600">/</span>
            <span className="text-sm text-cyan-500">{movie.genre}</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-sm font-bold border border-white/10">
              PG-13
            </span>
            <span className="text-gray-400 font-medium">2026</span>
            <span className="text-gray-400 font-medium">2h 24m</span>
            <div className="flex items-center text-yellow-500">
              <span className="text-xl">★</span>
              <span className="ml-1 font-bold text-white">8.9</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            In a future where humanity is on the brink of extinction, {movie.title} explores
            the boundaries of time, space, and the human heart. A visual masterpiece
            defining the {movie.genre.toLowerCase()} genre.
          </p>
        </div>
      </div>
    </div>
  );
}