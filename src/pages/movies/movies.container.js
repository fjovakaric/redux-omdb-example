import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { } from 'react-bootstrap';

import './_movies.scss'

class MoviesPage extends React.Component {
    render() {
        const { movies } = this.props;

        const moviePosters = movies.map((movie) => {
            return (
                <div className="movie-preview" key={movie.imdbID}>
                    <img src={movie.Poster} alt=""/>
                    <p>{movie.Title}</p>
                </div>
            )
        });
        return (
            <div className="movies-page">
                <h1>Movies</h1>
                <div className="display-movies">
                    {moviePosters}
                </div>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    movies: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.movies
    };
}

export default connect(
    mapStateToProps
)(MoviesPage);