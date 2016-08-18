import axios from 'axios';

const omdbUrl = 'http://www.omdbapi.com';

export function search(name) {
    const movieName = name.toLowerCase();
    return axios.get(omdbUrl, {
        params: {
            s: movieName,
            r: 'json',
            type: 'movie'
        }
    });

}

export function get(imdbId) {
    return axios.get(omdbUrl, {
        params: {
            i: imdbId,
            plot: 'full',
            r: 'json'
        }
    });

}