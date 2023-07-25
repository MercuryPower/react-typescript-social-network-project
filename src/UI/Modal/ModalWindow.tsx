import React, {useState} from 'react';
import Button from "../Button/Button";
import {Modal} from "react-bootstrap";
import styled, {css, keyframes} from "styled-components";
import Flex from "../../components/Flex";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
    show:boolean;
    onClose:() => void;
    onConfirm:() => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StyledModalWindow = styled.div`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props:{show:boolean}) => (props.show ? 'flex' : 'none') };
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  ${props => props.show && css`
    opacity: 1;
    animation: ${fadeIn} 0.3s ease;
    `}
  ${props => !props.show && css`
    opacity:0;
    animation:${fadeOut} 0.3s ease;
    `}
  `;
const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
 
`;
// 1. Пофиксить и сделать при клике на мусорную корзину модальное окно
const ModalWindow:React.FC<ModalProps> = ({show, onConfirm, onClose,}) => {

    const handleClose = () => {
        onClose()
    }
    const handleYes = () => {
        onConfirm()
    }

    return (
        <>
            <StyledModalWindow show={show}>
                <ModalContent>
                   Are you sure?
                    The data will be lost.
                    <Flex justifyContent={'center'} alignItems={'center'} margin={'15px'}>
                        <Button color={'black'}  radius={'25px'} margin={'0 10px 0 0'} onClick={handleYes}>
                            <FontAwesomeIcon icon={faCheck} /><b> Delete this post </b>
                        </Button>
                        <Button background={'black'} color={'white'} radius={'25px'}  onClick={handleClose}>
                            <FontAwesomeIcon icon={faX} /><b> Close </b>
                        </Button>
                    </Flex>
                </ModalContent>
            </StyledModalWindow>
        </>
    );
};

export default ModalWindow;