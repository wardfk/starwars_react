import styled from "styled-components";

const TitleH1Container = styled.div`
    font-size: 40px;
    color: white;
    display: flex;
    text-align: center;
    font-family: jedi;
    letter-spacing: 1.1 rem;
    text-shadow: 0 0 7px rgb(255, 232, 31),
    0 0 10px rgb(255, 232, 31),
    0 0 21px rgb(255, 232, 31),
    0 0 42px rgb(255, 232, 31),
    0 0 82px rgb(255, 232, 31),
    0 0 92px rgb(255, 232, 31),
    0 0 102px rgb(255, 232, 31),
    0 0 151px rgb(255, 232, 31);
    @media screen and (max-width: 400px){
        display: none;
    }
    @media screen and (max-width: 768px){
        font-size: 30px;
        margin: 25px 50px;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 1400px){
        font-size: 40px;
    }

`;

export default TitleH1Container; 