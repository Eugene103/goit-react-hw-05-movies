import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Suspense, lazy } from "react";
import { Link,  Nav } from "components/GlobalStyle";

const HomePage = lazy(() => import(`pages/HomaPage/HomePage`))
const Movies = lazy(() => import(`pages/MoviesPage/MoviesPage`))

export const App = () => {
  return (<>
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </header>
    <Suspense fallback={`Loading`}>
    <main>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:moviesId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>

      <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      </main>
    </Suspense>
  </>)

};
