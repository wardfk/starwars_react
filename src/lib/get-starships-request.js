import axios from "axios";

export const getStarshipsRequest = () => {
    return axios ('https://swapi.dev/api/starships', {
        method:'get'
    });
};