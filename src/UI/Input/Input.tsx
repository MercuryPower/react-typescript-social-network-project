import React, {useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons/faPaperclip";
import {CSSTransition} from "react-transition-group";

interface StyledInputProps {
    type:string;
    placeholder?:string;
    value?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    showClip?: boolean;
}
const StyledInput = styled.input`
  outline: none;
  border:0;
  margin-left: 0.75rem;
  width: min-content;
  box-shadow: 2px 2px 2px rgba(0, 0, 255, .2);
  padding:5px;
  border-radius: 10px;
`
const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const PaperclipIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  cursor: pointer;
  
`;
const FadeTransition = styled(CSSTransition)`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const Input = (props : StyledInputProps) => {
    const [showPaperclip, setShowPaperclip] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e);
        setShowPaperclip(e.target.value !== '');
    };
    return (
        <StyledInputWrapper>
            <StyledInput {...props} onChange={handleInputChange} />
            {props.showClip &&
                <FadeTransition in={showPaperclip} timeout={300} classNames="fade" unmountOnExit>
                    <PaperclipIcon icon={faPaperclip} size="lg" />
                </FadeTransition>
            }
        </StyledInputWrapper>
    );
};

export default Input;