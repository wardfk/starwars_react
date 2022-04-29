import React from "react";
import SectionContainer from "./Section-style";

const Section = ({children}) => {
    return(
        <SectionContainer>
            {children}
        </SectionContainer>
    );
};

export default Section;