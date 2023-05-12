import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieData from "../components/MovieData";

function Description() {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const getMovie = async () => {
        try {
            const json = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then((res) => res.json());
            setMovie(json.data.movie);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="movie-data-container">
            <MovieData
                key={movie.id}
                title={movie.title_long}
                image={movie.large_cover_image}
                description={movie.description_full}
                genres={movie.genres}
                rating={movie.rating}
            />
        </div>
    );
}

export default Description;
