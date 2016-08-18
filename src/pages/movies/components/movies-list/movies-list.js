import React, {PropTypes} from 'react';
import {} from 'react-bootstrap';

import MoviePoster from '../movie-poster/movie-poster';

import './_movies-list.scss';

// Set Component Name
class MoviesList extends React.Component {

    render() {
        const { movies } = this.props;

        const moviePosters = movies.map((movie) => {
            return <MoviePoster movie={movie} ></MoviePoster>
        });

        return (
            <div className="movies-list">
                {moviePosters}
            </div>
        );
    }
}

// Set component propTypes
MoviesList.propTypes = {
    movies: PropTypes.array
};

export default MoviesList;