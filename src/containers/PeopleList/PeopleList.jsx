import React from "react";
import PeopleListContainer from "./PeopleList-style";

const PeopleList = ({children}) => {
    return(
        <PeopleListContainer>
            {children}
        </PeopleListContainer>
    );
};

export default PeopleList;