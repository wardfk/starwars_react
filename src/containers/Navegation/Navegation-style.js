import styled from 'styled-components';

const NavegationContainer = styled.div`
    display: flex;
    justify-content: center;
    // margin-right: 50px;
    flex-direction: row;
    gap: 90px;
    font-family: jedi;
    a{
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 600px){
        margin-bottom: 50px;
        margin-top: 20px;
    }

`;

export default NavegationContainer;