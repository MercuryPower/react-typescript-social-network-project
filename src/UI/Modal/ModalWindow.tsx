import React, {useState} from 'react';
import Button from "../Button/Button";
import {Modal} from "react-bootstrap";
import styled from "styled-components";

interface ModalProps {
    show:boolean
}

const StyledModalWindow = styled.div<ModalProps>`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.show ? 'block' : 'none')}
`
const ModalWindow = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleYes = () => setShow(true);

    return (
        <>
            <StyledModalWindow show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>The data will be lost.</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleYes}>
                        Yes, I'm sure!
                    </Button>
                    <Button onClick={handleClose}>
                        Nope.
                    </Button>
                </Modal.Footer>
            </StyledModalWindow>
        </>
    );
};

export default Modal;