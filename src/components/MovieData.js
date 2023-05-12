import PropTypes from "prop-types";

function MovieData({title, image, description, genres, rating}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {genres !== undefined ? genres.map(genre =>
                <li key={genre}>
                    {genre}
                </li>) : <h3>{genres}</h3>}
            </ul>
            <h3>Rating: {rating}</h3>
        </div>
    )
}

MovieData.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number
}

export default MovieData;
