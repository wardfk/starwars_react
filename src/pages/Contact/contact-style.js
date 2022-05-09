import styled from 'styled-components';

const ContactContainer = styled.form`
    width: 100%;
    max-width: 1440px;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-family: jedi;
    input, textarea, span{
        border-radius: 6px;
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
        background-color: rgba(0, 0, 0, .8);
        color: white;
    }
    .message, .email, .name{
        width: 400px;
        margin-bottom: 20px;
        font-family: jedi;
        letter-spacing: 2px;
        border: none;
        background-color: rgba(255, 255, 255, .8);
        box-shadow: 0px 0px 200px rgba(255, 255, 255, 1);
        color: blue;
    }
`;

export default ContactContainer;