import React, {useState} from 'react';
import Button from "../Button/Button";
import {Modal} from "react-bootstrap";

const ModalWindow = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleYes = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
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
            </Modal>
        </>
    );
};

export default Modal;