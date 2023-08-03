import React from 'react';
import styled, {keyframes} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight, faSearch} from "@fortawesome/free-solid-svg-icons";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(40deg) scale(1.2);
  }
  50% {
    transform: rotate(90deg) scale(0.8);
  }
  75% {
    transform: rotate(40deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

const StyledRotating = styled(FontAwesomeIcon)`
  &:hover{
    animation ${rotateAnimation} 2s linear infinite;
  }
`
const Rotating = () => {
    return (
        <StyledRotating icon={faRotateRight} />
    );
};

export default Rotating;