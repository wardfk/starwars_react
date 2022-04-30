import axios from "axios";

export const getHumanRequest = (url) => {
    return axios (url, {
        method:'GET'
    });
};