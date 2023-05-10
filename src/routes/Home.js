import { useEffect, useState } from "react";
import Movies from "../components/Movies";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await(
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    
    useEffect(() => {
        getMovies()
    }, []);
    
    return (
        <div>
            {loading ? (
                <h1>Loading movie data...</h1>
            ) : (
                <div className="movies-container">
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <Movies
                                id={movie.id}
                                title={movie.title}
                                image={movie.medium_cover_image}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
