import React from "react";
import StarshipCardContainer from "./StarshipCard-style";

const StarshipCard = ({name, handleClick}) => {
    return(
        <StarshipCardContainer>
            <h3>{name}</h3>
            <span onClick={() => handleClick()}>View more ...</span>
        </StarshipCardContainer>
    );
};

export default StarshipCard;