import axios from "axios";

export const getStarshipRequest = (url) => {
    return axios (url, {
        method:'GET'
    });
};