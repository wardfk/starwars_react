import styled from 'styled-components';

const PeopleCardContainer = styled.li`
    max-width: 200px;
    width: 200px;
    max-height: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, .7);
    position: relative;
    border: 3px solid red;
    box-shadow: inset 0 0 50px rgb(250, 0, 0), 0 0 70px rgb(250, 0, 0);

    ::before{
    content: "";
    position: absolute;
    z-index: 3;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 3px solid red;
    outline: 1px solid white ;
}
h3{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: white;
    font-family: jedi;
    letter-spacing: 3px;
}
span{
    font-family: jedi;
    font-size: .8rem;
    border: 1px solid white;
    border-radius: 6px;
    box-shadow: inset 0 0 50px rgb(250, 0, 0), 0 0 30px rgb(250, 0, 0);
    text-shadow: 0 0 2px #fff;
    color: white;
    z-index: 4;
    padding: 3px 6px;
    cursor: pointer;
    letter-spacing: 3px;
}
@media screen and (max-width: 768px){
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    h3{
        font-size: 10px;
    }
    span{
        font-size: 0.4rem;
    }
}
`;

export default PeopleCardContainer;