import React from 'react';
import Logo from '../../components/Logo/Logo';
import HeaderContainer from './Header-style';
import {Link} from 'react-router-dom';
import Navegation from '../Navegation/Navegation';
import hamburger from '../../assets/img/hamburger.png';


const Header = ({children}) => {
    return (
        <HeaderContainer>
            <Logo className='logo'/>
            <Navegation className="links">
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
            </Navegation>
        </HeaderContainer>
    );
};

export default Header;