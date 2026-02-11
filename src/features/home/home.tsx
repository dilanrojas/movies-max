import { Link } from "react-router-dom";
import { getMovies } from "../../services/movies.service"

const movies = await getMovies();

export default function Home() {
  return (
    <section className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden wrapper">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Movie Background"
          className="w-full h-full object-cover opacity-60 mask-b-from-1"
        />
        <div className="absolute inset-0 bg-lienar-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-12 left-8 md:left-16 max-w-2xl">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
            Trending Now
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">Interstellar Journey</h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            A team of explorers travel beyond this galaxy to discover whether mankind has a future among the stars.
          </p>
          <div className="flex gap-4">
            <button className="bg-white cursor-pointer text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition">
              Watch Now
            </button>
            <button className="bg-gray-600/50 cursor-pointer backdrop-blur-md text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500 transition">
              View Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Grid Section */}
      <div className="py-12 wrapper">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold border-l-4 border-yellow-500 pl-4">
            Recently Added
          </h2>
          <Link to="/movies" className="text-yellow-500 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.slice(0, 5).map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-2/3 bg-gray-800 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="border-2 border-white rounded-full p-3 text-white text-lg">
                    ▶
                  </span>
                </div>
              </div>

              <h3 className="mt-3 font-semibold group-hover:text-yellow-500 transition-colors">
                {movie.title}
              </h3>
              <p className="text-sm text-gray-400">
                2024 • {movie.genre}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-8 wrapper">
        <h2 className="text-2xl font-bold mb-6">Popular Genres</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {['Action', 'Sci-Fi', 'Horror', 'Drama', 'Comedy', 'Documentary'].map((genre) => (
            <div
              key={genre}
              className="px-8 py-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-yellow-500 cursor-pointer whitespace-nowrap"
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}