import styled from 'styled-components';

const FilterSearchContainerContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    .search{
        font-family: jedi;
        border: none;
        background: none;
        background: rgba(225, 225, 225, .6);
        color: white;
        height: 25px;
    }
    @media screen and (max-width: 1400px){
        flex-direction: column;
        .search{
            margin-bottom: 25px;
        }
    }
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0;
        justify-content: center;
        .search{
            margin-bottom: 25px;
        }
    }
`;

export default FilterSearchContainerContainer;