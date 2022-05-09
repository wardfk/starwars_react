import React from "react";
import BannerContainer from "./Banner-style";

const Banner = ({children}) => {
    return(
        <BannerContainer>
            {children}
        </BannerContainer>
    );
};

export default Banner;