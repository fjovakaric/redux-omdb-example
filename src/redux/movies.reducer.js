import actionTypes from './constants';

const initialState = function(isEmpty) {
    if (isEmpty) {
        return {
            activeMovie: undefined,
            movies: []
        }
    }

    return {
        activeMovie: undefined,
        movies: [
            {
                Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
                Year: "2003",
                imdbID: "tt0325980",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg"
            },
            {
                Title: "Pirates of the Caribbean: Dead Man's Chest",
                Year: "2006",
                imdbID: "tt0383574",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg"
            },
            {
                Title: "Pirates of the Caribbean: At World's End",
                Year: "2007",
                imdbID: "tt0449088",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
            },
            {
                Title: "Pirates of the Caribbean: On Stranger Tides",
                Year: "2011",
                imdbID: "tt1298650",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg"
            }
        ]
    };
};

export default function moviesReducer(state = initialState(false), action) {
    switch(action.type) {
        case actionTypes.SEARCH_MOVIES_SUCCESS:
            return {
                activeMovie: Object.assign({}, state.activeMovie),
                movies: action.movies
            };

        case actionTypes.GET_MOVIE_SUCCESS:
            return {
                activeMovie: action.movie,
                movies: Object.assign([], state.movies)
            };

        case actionTypes.CLEAR_ACTIVE_MOVIE:
            return {
                activeMovie: undefined,
                movies: Object.assign([], state.movies)
            };

        default:
            return state;
    }
}