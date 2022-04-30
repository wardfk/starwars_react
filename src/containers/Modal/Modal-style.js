
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-wrapper{
        width: 100%;
        max-width: 600px;
        min-height: 300px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        flex-direction: column;
        padding: 20px 40px;
        .tob-bar{
            padding: 5px;
            display: flex;
            span{
                cursor: pointer;
            }
        }
    }
`;

export default ModalContainer;