import styled from "styled-components";

const TitleH1Container = styled.div`
    margin: 50px 100px;
    font-size: 60px;
    color: white;
    text-shadow: 0 0 7px rgb(255, 232, 31),
    0 0 10px rgb(255, 232, 31),
    0 0 21px rgb(255, 232, 31),
    0 0 42px rgb(255, 232, 31),
    0 0 82px rgb(255, 232, 31),
    0 0 92px rgb(255, 232, 31),
    0 0 102px rgb(255, 232, 31),
    0 0 151px rgb(255, 232, 31);
    @media screen and (max-width: 375px){
        display: none;
    }
    @media screen and (max-width: 768px){
        font-size: 40px;
        text-align: center;
    }

`;

export default TitleH1Container; 