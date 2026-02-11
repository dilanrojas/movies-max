import { Link } from "react-router-dom";
import type { Movie } from "../../lib/types";

export default function MovieCard({ id, title, genre, image }: Movie) {
  return (
    <article 
      className="group relative flex flex-col justify-end overflow-hidden p-6 h-96 rounded-2xl bg-gray-900 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500" 
      id={id}
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase text-white bg-cyan-600/80 backdrop-blur-md rounded-full">
          {genre}
        </span>
        
        <h2 className="text-xl font-bold text-white leading-tight mb-4 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h2>

        <Link to={`/movies/${id}`}>
          <button className="w-full py-2.5 bg-white text-black font-bold rounded-lg text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-cyan-400 cursor-pointer shadow-xl">
            View details
          </button>
        </Link>
      </div>
    </article>
  );
}