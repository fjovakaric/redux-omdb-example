import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import * as actions from '../../redux/actions';

import './_movies.scss'

class MoviesPage extends React.Component {
    componentDidMount() {
        const { actions } = this.props;

        actions.getMovies();
    }

    render() {
        const { movies } = this.props;

        let tooltip;
        const moviePosters = movies.map((movie) => {
            tooltip = (
                <Tooltip id="tooltip">{movie.Title}</Tooltip>
            );
            return (
                <div className="movie-preview">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={tooltip}
                        key={movie.imdbID}>

                        <img src={movie.Poster} alt=""/>
                    </OverlayTrigger>
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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesPage);