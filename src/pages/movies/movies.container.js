import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import MoviesList from './components/movies-list/movies-list';

import SearchField from '../../components/search-field/search-field';

import * as actions from '../../redux/actions';

import './_movies.scss'

class MoviesPage extends React.Component {
    componentDidMount() {
        const { actions } = this.props;
        actions.getMovies();
    }

    render() {
        const { movies } = this.props;

        return (
            <div className="movies-page">
                <h1>Movies</h1>

                <div className="search-wrapper">
                    <SearchField
                        placeholder={'Search movies on OMDb'}/>
                </div>

                <MoviesList movies={movies}></MoviesList>
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