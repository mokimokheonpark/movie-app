import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieData from "../components/MovieData";

function Description() {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };
    
    useEffect(() => {
        getMovie();
    }, []);

    console.log(movie.genres)

    return (
        <div class="movie-data-container">
            <MovieData
                key={movie.id}
                title={movie.title_long}
                image={movie.large_cover_image}
                description={movie.description_full}
                genres={movie.genres}
            />
        </div>
    );
}

export default Description;
