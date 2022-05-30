import FooterContainer from "./Footer-style";
import LogoFooter from "../../components/LogoFooter/LogoFooter";

const Footer = ({children}) => {
    return(
        <FooterContainer>
            <LogoFooter />
        </FooterContainer>
    );
};

export default Footer;