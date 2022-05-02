import React from "react";

import LogoContainer from "./Logo-style";


const Logo = ({children}) => {
    return (
        <LogoContainer>
            <p>
                star <br></br>wars <br></br><span>by Ward Feys</span>
            </p>
        </LogoContainer>
    );
};

export default Logo;