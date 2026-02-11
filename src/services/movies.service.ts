import type { Movie } from "../lib/types";

const MOVIES_URL = '/movies.json';

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(MOVIES_URL);

  if (!response) {
    throw new Error (
      `No se pdo cargar movies.ts (status ${response})`
    )
  }

  const data = await response.json();
  return data as Movie[];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const movies = await getMovies();

  const found = movies.find(movies => movies.id === id);

  return found ?? null;
}