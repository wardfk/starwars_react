import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1440px;
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        margin: 70px 0 0 122px ;   
    }
    .links{
        width: 200px;
        margin-right: 122px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    @media screen and (max-width: 375px){
        flex-direction: column;
        .logo{
            justify-content: center;
            margin: 0px;
        }
        .links{
            display: flex;
            justify-center: center;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding-top: 20px;
        min-height: 100px;
        margin-bottom: 20px;
        .logo{
            justify-content: center;
            margin: 0px;
        }
        .links{
            display: flex;
            justify-center: center;
        }
    }
  
  
`;

export default HeaderContainer;