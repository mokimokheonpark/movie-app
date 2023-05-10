import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function Movies({id, title, image}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
        </div>
    )
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Movies;
