import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './features/home/home';
import Header from './shared/header';
import Footer from './shared/footer';
import NotFound from './shared/not-found';
import Movies from './features/movies/movies';
import MovieDetails from './features/movies/movie-details';

export default function App() {
  return (
    <BrowserRouter>
        <Header />
         <main>
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:id' element={<MovieDetails />} />

                <Route path='*' element={<NotFound />} />
             </Routes>
         </main>
        <Footer />
    </BrowserRouter>
  )
}