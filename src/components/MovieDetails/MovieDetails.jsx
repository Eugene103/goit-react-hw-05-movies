import { fetchMovieById } from "Api"
import { BtnGoBack } from "components/BtnGoBack/BtnGoBack"
import { useEffect,  useState } from "react"
import {  Outlet,  useLocation,  useParams } from "react-router-dom"
import { Container, List, Image,FLexDiv, Item, ListAddInform, Link} from "./MovieDetails.styled";

export const MovieDetails = () => {
    const location = useLocation();
    const params = useParams() 
    const [movie, setMovie] = useState()
    const [earlyLock, setEarlyLock] = useState();

 

    useEffect(() => {
       async function getMovieDetails() {
            try {
                const fetchMovie= await fetchMovieById(params.moviesId)
                setMovie(fetchMovie)
                setEarlyLock(location)
            } catch (error) {
                console.log(error)
            }
        }
        getMovieDetails()
    }, [params.moviesId])

    const checkHaveUrlMovies = () => {
        if (earlyLock?.state?.from) {
            const { state: { from: { pathname, search } } } = earlyLock
            return pathname + search
        }
    }

    return (<Container>
        <BtnGoBack to={(earlyLock?.state?.from?.search === ``) ? earlyLock?.state?.from?.pathname : checkHaveUrlMovies()} />
        {movie && <List>
            <li><Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} ></Image></li>
            <FLexDiv>
            <Item><h2>{movie.title}</h2></Item>
            <Item>User Score: {(parseFloat(movie.vote_average) * 2.0 * Math.PI).toFixed(1)}%</Item>
            <Item><h3>Overview</h3>
                <p>{movie.overview}</p>
            </Item>
            <Item><h4>Genres</h4>
                {movie.genres.map(({ id,name }) => <p key={id}>{name}</p>)}
                </Item>
                </FLexDiv>
        </List>}
        <ListAddInform>
            <li><h4>Additional Information</h4></li>
            <li><Link to={`cast`} >Cast</Link></li>
            <li><Link to={`reviews`}>Reviews</Link></li>
        </ListAddInform>
        <Outlet/>
    </Container>)
}