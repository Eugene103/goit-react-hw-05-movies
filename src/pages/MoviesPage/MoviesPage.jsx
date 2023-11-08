import { fetchMovieByName } from "Api";
import { useEffect, useState } from "react";
import {  useLocation, useSearchParams } from "react-router-dom";
import { Container, List, Link } from "./MoviesPage.styled";

export default function MoviesPage() { 
    const location = useLocation()

    const [params, setParams] = useSearchParams()
    const [searchMovies, setSearchMovies] = useState()
    const query = params.get(`query`) ?? ``;

    const changeSearch = evt => {
        evt.preventDefault()
        params.set(`query`, evt.target.searchInput.value.toLocaleLowerCase())
        setParams(params)
   
    }

    useEffect(() => {
        async function fetchSearchMovie() {
            try {
                 if (query === ``) {
                     return
                }
                
                const fetchMovies = await fetchMovieByName(query)
                setSearchMovies(fetchMovies)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSearchMovie()
    },[query])
 
    return <Container>
        <form onSubmit={changeSearch}>
            <input type="text" name="searchInput"/>
            <button type="submit">Search</button>
        </form>
        {searchMovies && (<List>{
            searchMovies.results.map(({ id, title }) =>
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from:location }}>{title}</Link>
                </li>)}</List>)}
    </Container>
}