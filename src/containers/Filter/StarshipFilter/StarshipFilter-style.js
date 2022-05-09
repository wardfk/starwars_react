import styled from 'styled-components';

const StarshipFilterContainer = styled.div`
    background: rgba(255, 0, 0, 0.5);
    border-radius: 6px;
    box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.7px);
    -webkit-backdrop-filter: blur(6.7px);
    padding: 15px; 
    display: flex;
    .filter-starship{
        width: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .buttons{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            text-align: center;
        }
        button{
            text-shadow: -.5px 0 black, 0 .5px black, .5px 0 black, 0 -.5px black;
            font-family: jedi;
            font-size: 1.1rem;
            padding: 0;
            background-color: transparent;
            border: none;
            color: white;
            text-decoration: underline;
            cursor: pointer;
            :hover{
                text-decoration: none;
            }
        }
    @media screen and (max-width: 375px){
        padding: 10px;
        .filter-starship{
            width: 300px;
            display: flex;
            justify-content: start;
            align-items: center;
        }
        .buttons{
            display: flex;
            button: 0.9rem;
            flex-direction: column;
        }
        button{

        }
    }
    @media screen and (max-width: 768px){
        display: flex;
        width: 200px;
        .filter-starship{
            margin: auto;
        }
        .buttons{0;
            flex-direction: column;
            button{
                font-size: 0.9rem;
            }
        }
    }
`;

export default StarshipFilterContainer;