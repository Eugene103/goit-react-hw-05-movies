import { fetchCReviews } from "Api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  List, Item, Caption} from "./Reviews.styled";

export const Reviews = () => {
    const params = useParams()
    const [reviews, setReviews] = useState()
    useEffect(() => {
        async function getReviews() {
            try {
                const getingReviews = await fetchCReviews(params.moviesId)
                setReviews(getingReviews)
            } catch (error) {
                console.log(error)
            }
        }
        getReviews()
    }, [params.moviesId])

    return <div>{(reviews?.results.length === 0)
        ? <Caption>We don`t have any reviews for this movie</Caption> 
        : (<List>{reviews?.results.map(({ author, content, id }) => <Item key={id}><h4>{author}</h4><p>{content}</p></Item>)}</List>)
}</div>
}