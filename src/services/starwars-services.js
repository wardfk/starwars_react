import { useState } from "react";

import { getPeopleRequest } from '../lib/get-people-request';
import { getHumanRequest } from "../lib/get-human-request";
import { getStarshipsRequest } from "../lib/get-starships-request";
import { getStarshipRequest } from "../lib/get-starship-request";

export const useStarwars = () => {
    const [loading, setLoading] = useState(true);
    const [peopleListError, setPeopleListError] = useState("");
    const [starshipsListError, setStarshipsListError] = useState("");
    const [starshipListError, setStarshipListError] = useState("");

    const getPeople = async () => {
        try{
            const peopleResponse = await getPeopleRequest();
            setLoading(false);
            return peopleResponse;
        }catch(error){
            setPeopleListError(error);
            setLoading(false);
        }
    };  
    const getHuman = async (url) => {
        try{
            const HumanResponse = await getHumanRequest(url); 
            setLoading(false);
            return HumanResponse; 
        }catch(error){
            setPeopleListError(error);
            setLoading(false);
        }
    };

      
    const getStarships = async () => {
        try{
            const starshipResponse = await getStarshipsRequest();
            setLoading(false);
            return starshipResponse;
        }catch(error){
            setStarshipsListError(error);
            setLoading(false);
        }
    }

    const getStarship = async (url) => {
        try{
            const starshipResponse = await getStarshipRequest(url);
            setLoading(false);
            return starshipResponse;
        }catch(error){
            setStarshipListError(error);
            setLoading(false);
        }
    }


    return{
        getPeople,
        loading,
        peopleListError,
        getHuman,
        getStarships,
        getStarship
    }
}