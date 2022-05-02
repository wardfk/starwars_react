import styled from 'styled-components';

const ContactContainer = styled.form`
    
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: jedi;
    .talk{
        top: 0px;
        left: 150px;
        width: 260px;
        height: 200px;
        text-align: center;
        background: white;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: relative;
        border-radius:10px;
        box-shadow: 0 0 90px rgba(99, 163, 255, 1);
        }
        .talk:before{
            content: "";
            display: block;
            border-width:15px 15px 0px 15px ;
            border-color:white transparent;
            border-style:solid;
            position: absolute;
            bottom:-15px;
            transform: translateX(-80px)
        }
        p{
            color: rgba(99, 163, 255, 1);
            font-size: 2rem;
            font-weight: bold;
        }
        img{
            width: 300px;
        }
    .name{
        width: 400px;
        margin-bottom: 20px;
        box-shadow: 0 0 90px rgba(99, 163, 255, 1);
        font-family: star;
    }
    .email{
        width: 400px;
        margin-bottom: 20px;
        box-shadow: 0 0 90px rgba(99, 163, 255, 1);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .message{
        width: 400px;
        margin-bottom: 20px;
        box-shadow: 0 0 90px rgba(99, 163, 255, 1);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    span{
        width: 400px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 90px rgba(99, 163, 255, 1);
        font-family: jedi;
        letter-spacing: 5px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, .6);
        color: white;
    }
    .message, .email, .name{
        font-family: jedi;
        letter-spacing: 2px;
        border: none;
        background-color: rgba(255, 255, 255, .6);
        color: blue;
    }
`;

export default ContactContainer;