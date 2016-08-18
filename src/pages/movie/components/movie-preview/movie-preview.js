import React, {PropTypes} from 'react';
import {} from 'react-bootstrap';
import { Link } from 'react-router';

import './_movie-preview.scss';

// Set Component Name
class MoviePreview extends React.Component {

    render() {
        const { movie } = this.props;
        const poster = movie.Poster != 'N/A' ? movie.Poster : '/images/no-poster.jpeg';

        return (
            <div className="movie-preview">
                <section className="upper">
                    <img src={poster} alt="" className="poster pull-left"/>
                    <h1>{movie.Title}</h1>
                    <p><strong>Released: </strong>{movie.Year}</p>
                    <p><strong>Genre: </strong>{movie.Genre}</p>
                    <p><strong>Director: </strong>{movie.Director}</p>
                    <p><strong>Writer: </strong>{movie.Writer}</p>
                    <p><strong>Actors: </strong>{movie.Actors}</p>
                    <p><strong>IMDB rating: </strong>{movie.imdbRating} / 10 ({movie.imdbVotes} people voted)</p>
                    <a href={'http://www.imdb.com/title/' + movie.imdbID} target="_blank">
                        <img className="imdb-logo" src="/images/imdb-logo.jpeg" alt=""/>
                    </a>
                </section>
                <section className="lower">
                    <p><strong>Awards: </strong>{movie.Awards}</p>
                    <p><strong>Plot: </strong>{movie.Plot}</p>
                </section>
            </div>
        );
    }
}

// Set component propTypes
MoviePreview.propTypes = {
    movie: PropTypes.object
};

export default MoviePreview;