import styled from 'styled-components';

const StarshipCardContainer = styled.article`
    max-width: 175px;
    width: 175px;
    max-height: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, .7);
    position: relative;
    border: 5px solid rgb(109, 75, 204);
    box-shadow: inset 0 0 50px rgb(109, 75, 204), 0 0 70px rgb(109, 75, 204);

    ::before{
    content: "";
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 5px solid rgba(109, 75, 204);
    outline: 1px solid white ;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    span{
        border: 1px solid white;
        border-radius: 6px;
        box-shadow: inset 0 0 50px rgb(109, 75, 204), 0 0 30px rgb(109, 75, 204);
        text-shadow: 0 0 2px #fff;
        color: white;
        z-index: 4;
        padding: 3px 6px;
        cursor: pointer;
    }
`;

export default StarshipCardContainer;