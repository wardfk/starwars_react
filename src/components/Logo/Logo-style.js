import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    p{
        font-family: jedi;
        text-transform: uppercase;
        font-size: 40px;
        color: black;
        letter-spacing: 5px;
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }
    span{
        font-size: 10px;
        color: yellow;
        position: relative;
        top: -30px;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`;

export default LogoContainer;