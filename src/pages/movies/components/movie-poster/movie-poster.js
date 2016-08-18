import React, {PropTypes} from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './_movie-poster.scss';

// Set Component Name
class MoviePoster extends React.Component {

    render() {
        const { movie } = this.props;

        const tooltip = <Tooltip id="tooltip">{movie.Title}</Tooltip>;

        return (
            <div className="movie-poster">
                <OverlayTrigger
                    placement="bottom"
                    overlay={tooltip}
                    key={movie.imdbID}>

                    <img src={movie.Poster} alt=""/>
                </OverlayTrigger>
            </div>
        );
    }
}

// Set component propTypes
MoviePoster.propTypes = {
    movie: PropTypes.object
};

export default MoviePoster;