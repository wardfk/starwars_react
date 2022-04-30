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

    @media screen and (max-width: 768px){
        .logo{
            margin: 45px 0 0 45px;
        }
    }
    
    @media screen and (max-width: 375px){
        flex-direction: column;
        .logo{
            // width: 182px;
            justify-content: center;
        }
        .links{
            display: flex;
            justify-center: center;
        }
    }
  
`;

export default HeaderContainer;