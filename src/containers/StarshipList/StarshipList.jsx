import React from "react";
import StarshipListContainer from "./StarshipList-style";

const StarshipList = ({children}) => {
    return(
        <StarshipListContainer>
            {children}
        </StarshipListContainer>
    );
};

export default StarshipList;