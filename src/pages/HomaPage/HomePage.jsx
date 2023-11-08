import { DayTrending } from "Api"
import { useEffect, useState } from "react"
import {useLocation } from "react-router-dom";
import {  Container, Title, List, Link} from "./HomePage.styled";

export default function HomePage() {
    const location = useLocation()

    const [trendingMovies, setTrendingMovies] = useState()
    useEffect(() => {
        async function getTrandingMovies() {
            try {
                const movies = await DayTrending();
                setTrendingMovies(movies)
            } catch (error) {
                console.log(error)
            }
        }
        getTrandingMovies();
    }, [])

    return <Container>
        <Title>Trending today</Title>
        {trendingMovies && <List>{
            trendingMovies.results.map(({ id, title }) =>
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from:location }}>{title}</Link>
                </li>)
        }</List>}
    </Container>
}