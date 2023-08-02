import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled, {keyframes} from "styled-components";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(20deg) scale(1.2);
  }
  50% {
    transform: rotate(-20deg) scale(0.8);
  }
  75% {
    transform: rotate(20deg) scale(1.2);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;
const StyledShaking = styled(FontAwesomeIcon)`
  &:hover{
    animation ${shakeAnimation} 2s linear infinite;
  }
`
export const Shaking = () => {
    return (
        <StyledShaking icon={faSearch} />
    );
};

export default Shaking;