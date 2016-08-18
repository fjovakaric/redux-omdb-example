import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from 'react-bootstrap';

import MoviePreview from './components/movie-preview/movie-preview';

import * as actions from '../../redux/actions';

import './_movie.scss'

// Set container name
class MoviePage extends React.Component {
    componentDidMount() {
        const { activeMovie, routeParams, actions } = this.props;

        if (activeMovie && activeMovie.imdbID != routeParams.id) {
            actions.clearActiveMovie();
            actions.getMovie(routeParams.id);
        }

        if (!activeMovie) {
            actions.getMovie(routeParams.id);
        }
    }

    render() {
        const { activeMovie } = this.props;

        const isMovieLoaded = (activeMovie);

        return (
            <div className="movie-page">
                {isMovieLoaded && <MoviePreview movie={activeMovie} />}
            </div>
        );
    }
}

// Set PropTypes
MoviePage.propTypes = {
    activeMovie: PropTypes.object,
    actions: PropTypes.object
};

// Set props
function mapStateToProps(state, ownProps) {
    return {
        activeMovie: state.movies.activeMovie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);