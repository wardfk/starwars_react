import React from "react";
import PeopleCardContainer from "./PeopleCard-style";

const PeopleCard = ({name}) => {
    return(
        <PeopleCardContainer>
            <h3>{name}</h3>
        </PeopleCardContainer>
    );
};

export default PeopleCard;