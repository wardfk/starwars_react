import styled from 'styled-components';

const PeopleCardContainer = styled.article`
    // max-width: 175px;
    // width: 175px;
    // max-height: 200px;
    // height: 200px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // margin-bottom: 30px;
    // background-color: rgba(0, 0, 0, .7);
    // position: relative;
    // border: 5px solid red;
    // // border-radius: 6px;
    // box-shadow: inset 0 0 50px rgb(250, 0, 0), 0 0 70px rgb(250, 0, 0);

    // ::before{
    // content: "";
    // position: absolute;
    // z-index: 3;
    // top: 0px;
    // left: 0px;
    // right: 0px;
    // bottom: 0px;
    // border: 5px solid red;
    // outline: 1px solid white ;
    // // border-radius: 6px;
    // }
    // h3{
    //     font-size: 18px;
    //     font-weight: bold;
    //     text-align: center;
    //     color: white;
    // }
    // span{
    //     font-size: 14px;
    //     font-weight: bold;
    //     color: white;
    //     padding: 5px 10px;
    //     background-color: rgb(250, 0, 0);
    //     border: 1px solid rgb(250, 0, 0);
    //     box-shadow: 0 0 40px rgb(250, 0, 0);
    //     cursor: pointer;
    // }

    width: 100%;
    width: 180px;
    height: 250px;
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