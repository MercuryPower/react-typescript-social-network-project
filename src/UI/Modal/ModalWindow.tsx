import React, {useEffect, useMemo, useState} from 'react';
import Button from "../Button/Button";
import {Modal} from "react-bootstrap";
import styled, {css, keyframes} from "styled-components";
import Flex from "../../components/Flex";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons/faX";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

interface ModalProps {
    show:boolean;
    onClose:() => void;
    onConfirm:() => void;
    children: React.ReactNode;
    confirmButtonText: string;
    cancelButtonText: string;
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
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
 
`;
const CloseButton = styled.button`
  position: inherit;
  left:20px;
  bottom: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ModalWindow:React.FC<ModalProps> = ({show, onConfirm, onClose, children, confirmButtonText, cancelButtonText}) => {

    // Закрытие окна через ESC
    useMemo(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            console.log('I did it!')
        };
    }, [onClose]);
    // !Закрытие окна через ESC

    return (
        <>
            <StyledModalWindow show={show}>
                <ModalContent>
                    {children}
                    <CloseButton onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </CloseButton>
                    <Flex justifyContent={'center'} alignItems={'center'} margin={'15px'}>
                        <Button color={'black'} radius={'25px'} margin={'0 10px 0 0'} onClick={onConfirm}>
                            <FontAwesomeIcon icon={faCheck} /><b>{confirmButtonText}</b>
                        </Button>
                        <Button background={'black'} color={'white'} radius={'25px'} onClick={onClose}>
                            <FontAwesomeIcon icon={faX} /><b>{cancelButtonText}</b>
                        </Button>
                    </Flex>
                </ModalContent>
            </StyledModalWindow>
        </>
    );
};

export default ModalWindow;