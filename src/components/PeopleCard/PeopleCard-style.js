import styled from 'styled-components';

const PeopleCardContainer = styled.article`
    width: 100%;
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    border: 10px solid rgb(250, 0, 0);
    box-shadow: inset 0 0 50px rgb(250, 0, 0), 0 0 30px rgb(250, 0, 0);
    h3{
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    span{
        font-size: 14px;
        font-weight: bold;
        color: white;
        padding: 5px 10px;
        background-color: rgb(250, 0, 0);
        border: 1px solid rgb(250, 0, 0);
        box-shadow: 0 0 40px rgb(250, 0, 0);
        cursor: pointer;
    }
   
`;

export default PeopleCardContainer;