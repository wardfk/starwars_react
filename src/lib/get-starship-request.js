import axios from "axios";

export const getStarshipRequest = () => {
    return axios ('https://swapi.dev/api/starships', {
        method:'get'
    });
};