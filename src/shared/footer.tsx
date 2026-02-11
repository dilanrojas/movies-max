import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="transition-colors duration-300
      bg-slate-50 border-t border-slate-200 pt-12 pb-8
      dark:bg-zinc-950 dark:border-zinc-800">

      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="flex flex-col gap-4">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-cyan-400">
              Movies<span className="text-slate-900 dark:text-white">Max</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs
              text-slate-500 dark:text-zinc-400">
              Your ultimate destination for cinematic experiences. Explore the latest blockbusters and timeless classics.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4
              text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link to="/movies" className="text-sm transition-colors text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400">Movies</Link></li>
              <li><Link to="/" className="text-sm transition-colors text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4
              text-slate-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm transition-colors text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400">Privacy Policy</Link></li>
              <li><Link to="/" className="text-sm transition-colors text-slate-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyan-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-zinc-500">
            © {currentYear} MoviesMax Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400 dark:text-zinc-500">
              Made for movie lovers.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}