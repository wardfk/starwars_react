import styled from 'styled-components';

const FilterContainer = styled.div`
    background: rgba(255, 255, 255, 0.31);
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.7px);
    -webkit-backdrop-filter: blur(6.7px);
    padding: 20px; 
    .filter-people{
        width: 300px;
        h4{
            font-size: 1.3rem;
            color: white;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .buttons{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            button{
                font-size: 1.2rem;
                padding: 0;
                background-color: transparent;
                border: none;
                text-shadow: 2px 2px 3px white;
                color: white;
                text-decoration: underline;
                cursor: pointer;
                :hover{
                    text-decoration: none;
                }
            }
        }
`;

export default FilterContainer;