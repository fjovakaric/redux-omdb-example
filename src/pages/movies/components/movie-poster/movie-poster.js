import React, {PropTypes} from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';

import './_movie-poster.scss';

// Set Component Name
class MoviePoster extends React.Component {

    render() {
        const { movie } = this.props;

        const tooltip = <Tooltip id="tooltip">{movie.Title}</Tooltip>;
        const poster = movie.Poster != 'N/A' ? movie.Poster : '/images/no-poster.jpeg';

        return (
            <Link className="movie-poster" to={'/movie/' + movie.imdbID}>
                <OverlayTrigger
                    placement="bottom"
                    overlay={tooltip}
                    key={movie.imdbID}>

                    <img src={poster} alt=""/>
                </OverlayTrigger>
            </Link>
        );
    }
}

// Set component propTypes
MoviePoster.propTypes = {
    movie: PropTypes.object
};

export default MoviePoster;