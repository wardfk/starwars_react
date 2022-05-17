import LogoFooterimg from '../../assets/img/logo_starwars.png';
import LogoFooterContainer from './LogoFooter-style';

const LogoFooter = ({children}) => {
    return(
        <LogoFooterContainer>
            <img src={LogoFooterimg} alt="" />
        </LogoFooterContainer>
    )
};

export default LogoFooter;