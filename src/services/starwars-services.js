import { useState } from "react";

import { getPeopleRequest } from '../lib/get-people-request';
export const useStarwars = () => {
    const [loading, setLoading] = useState(true);
    const [peopleListError, setPeopleListError] = useState("");

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
    return{
        getPeople,
        loading,
        peopleListError,
    }
}