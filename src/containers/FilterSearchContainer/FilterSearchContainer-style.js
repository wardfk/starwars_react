import styled from 'styled-components';

const FilterSearchContainerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export default FilterSearchContainerContainer;