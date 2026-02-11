import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 sticky top-0 z-50 transition-colors duration-300
      bg-white border-b border-slate-200 
      dark:bg-zinc-950 dark:border-zinc-800 dark:backdrop-blur-md">
      <div className="wrapper flex items-center h-full justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600 dark:text-cyan-400 hover:opacity-90 transition-opacity"
        >
          Movies<span className="text-slate-900 dark:text-white">Max</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/movies"
                className="text-sm font-medium transition-colors
                text-slate-600 hover:text-blue-600 
                dark:text-zinc-400 dark:hover:text-cyan-400"
              >
                Movies
              </Link>
            </li>
            {/* Add a Theme Toggle button here if you want to switch modes! */}
          </ul>
        </nav>
      </div>
    </header>
  );
}