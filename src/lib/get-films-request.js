import axios from 'axios';

export const getFilmRequest = () => {
    return axios('https://swapi.dev/api/films', {
        method:'get'
    });
};