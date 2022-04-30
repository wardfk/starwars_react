import styled from 'styled-components';

const PeopleListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 132px;
    margin: 0px 122px;
    padding: 0;
    @media screen and (max-width: 768px){
        display: flex;
        gap: 38px;
        margin: 0 45px;
    }
    @media screen and (max-width: 375px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default PeopleListContainer;