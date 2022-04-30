import React from "react";

import LogoContainer from "./Logo-style";

import logo from '../../assets/img/logo_starwars.png';

const Logo = () => {
    return (
        <LogoContainer>
            <img className="logo" src={logo} alt="Logo Star Wars" />
        </LogoContainer>
    );
};

export default Logo;