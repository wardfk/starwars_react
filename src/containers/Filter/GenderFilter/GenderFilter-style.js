import styled from 'styled-components';

const FilterContainer = styled.div`
    background: rgba(255, 0, 0, 0.5);
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.7px);
    -webkit-backdrop-filter: blur(6.7px);
    padding: 15px; 
    .filter-people{
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h4{
            font-size: 1.3rem;
            color: white;
        }
        .buttons{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;
            }
            button{
                font-size: 1.1rem;
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
    @media screen and (max-width: 375px){
        padding: 10px;
        .filter-people{
            width: 300px;
            display: flex;
            justify-content: start;
            align-items: center;
        }
        .buttons{
            flex-direction: row;
            button: 0.9rem;
        }
        button{

        }
    }
    @media screen and (max-width: 768px){
        padding: 10px;
        .buttons{
            flex-direction: column;
            button{
                font-size: 0.9rem;
            }
        }
    }

`;

export default FilterContainer;