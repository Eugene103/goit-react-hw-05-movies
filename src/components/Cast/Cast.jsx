import { fetchCasts } from "Api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { List, Item , Caption} from "./Cast.styled";

export const Cast = () => {
    const params = useParams()
    const [casts, setCasts] = useState([])
    useEffect(() => {
        async function getCasts() {
            try {
                const getingCasts = await fetchCasts(params.moviesId)
                setCasts(getingCasts.cast)
            } catch (error) {
                console.log(error)
            }
        }
        getCasts()
    }, [params.moviesId])

    return <div>{(casts.length === 0)
        ? <Caption>We don`t have any casts for this movie</Caption>
        : (<List>{
        casts.map(({id, name, profile_path, character}) => 
            <Item key={id} ><img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name} width={50}/>               
                {name}
                <p>Character: {character}</p>
            </Item>
    )
    }</List>)
    }</div>
}