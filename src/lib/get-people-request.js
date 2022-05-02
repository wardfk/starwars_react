import axios from "axios";

export const getPeopleRequest = () => {
    return axios ('https://swapi.dev/api/people/', {
        method:'get'
    });
};