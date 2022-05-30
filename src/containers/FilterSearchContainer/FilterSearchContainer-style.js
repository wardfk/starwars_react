import styled from 'styled-components';

const FilterSearchContainerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .search{
        font-family: jedi;
        border: none;
        background: none;
        background: rgba(225, 225, 225, .6);
        color: white;
        height: 25px;
        border-radius: 6px;
    }
    @media screen and (max-width: 2000px){
        flex-direction: row;
        align-items: center;
        padding: 0 15px;
        .search{
            height: 50px;
            align-items: center;
        }
    }
    @media screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        margin: auto;
        .search{
            margin-bottom: 25px;
        }
    }
    @media screen and (max-width: 375px){
        flex-direction: column;
        align-items: center;
        .search{
            margin-bottom: 25px;
        }
    }
`;

export default FilterSearchContainerContainer;