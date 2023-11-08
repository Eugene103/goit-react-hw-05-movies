import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3/`

export const DayTrending = async () => {
    const config = {
       headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRiODc5MDhiZWZmZTk1ZTU0NWZhYWYyZDQwM2ZhZiIsInN1YiI6IjY1NDg5NDhhMWFjMjkyN2IyZjI2Nzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDa0ACu8PswH8ruBoYuAncan8UZ2A_kdu0bGBP_b9l4'
        }
    };  
    const response = await axios.get(`trending/movie/day?language=en-US`, config)
    return response.data
}
export const fetchMovieById = async moviesId=> {
    const config = {
       headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRiODc5MDhiZWZmZTk1ZTU0NWZhYWYyZDQwM2ZhZiIsInN1YiI6IjY1NDg5NDhhMWFjMjkyN2IyZjI2Nzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDa0ACu8PswH8ruBoYuAncan8UZ2A_kdu0bGBP_b9l4'
        }
    };  
    const response = await axios.get(`movie/${moviesId}`, config)
    return response.data
}
export const fetchCasts = async moviesId=> {
    const config = {
       headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRiODc5MDhiZWZmZTk1ZTU0NWZhYWYyZDQwM2ZhZiIsInN1YiI6IjY1NDg5NDhhMWFjMjkyN2IyZjI2Nzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDa0ACu8PswH8ruBoYuAncan8UZ2A_kdu0bGBP_b9l4'
        }
    };  
    const response = await axios.get(`movie/${moviesId}/credits?language=en-US`, config)
    return response.data
}
export const fetchCReviews = async moviesId=> {
    const config = {
       headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRiODc5MDhiZWZmZTk1ZTU0NWZhYWYyZDQwM2ZhZiIsInN1YiI6IjY1NDg5NDhhMWFjMjkyN2IyZjI2Nzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDa0ACu8PswH8ruBoYuAncan8UZ2A_kdu0bGBP_b9l4'
        }
    };  
    const response = await axios.get(`movie/${moviesId}/reviews?language=en-US&page=1`, config)
    return response.data
}
export const fetchMovieByName = async query => {

    const config = {
       headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWRiODc5MDhiZWZmZTk1ZTU0NWZhYWYyZDQwM2ZhZiIsInN1YiI6IjY1NDg5NDhhMWFjMjkyN2IyZjI2Nzc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jDa0ACu8PswH8ruBoYuAncan8UZ2A_kdu0bGBP_b9l4'
        }
    };  
    const response = await axios.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`, config)
    return response.data
}