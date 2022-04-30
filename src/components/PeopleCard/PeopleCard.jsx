import React from "react";
import PeopleCardContainer from "./PeopleCard-style";

const PeopleCard = ({name, handleClick}) => {
    return(
        <PeopleCardContainer>
            <h3>{name}</h3>
            <span onClick={() => handleClick()}>Ver más información</span>
        </PeopleCardContainer>
    );
};

export default PeopleCard;