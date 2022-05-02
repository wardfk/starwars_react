import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    max-width: 2000px;
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: jedi;
    
    @media screen and (max-width: 375px){
        flex-direction: column;
        .logo{
            justify-content: center;
            margin: 0px;
        }
        .links{
            display: none;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        min-height: 100px;
        margin: 0 0 20px 0;
        width: 100%;
        justify-content: center;
        .logo{
            justify-content: center;
            margin: 0px;
        }
        .links{
            display: none;
            margin: 0;
        }
    }
  
  
`;

export default HeaderContainer;