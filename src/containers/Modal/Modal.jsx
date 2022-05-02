import React from "react";

//Styled-components
import ModalContainer from "./Modal-style";

const MainModal = ({children, handleClick}) => {
    return (
        <ModalContainer>
            <div className="modal-wrapper">
                <div className="tob-bar">
                    <span onClick={() => handleClick()}>X</span>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </ModalContainer>
    );
};

export default MainModal;