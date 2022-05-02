import styled from 'styled-components';

const PeopleListContainer = styled.ul`
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    gap: 20px;
    list-style: none;
    @media screen and (max-width: 768px){
        justify-content: space-around;
    }
`;

export default PeopleListContainer;