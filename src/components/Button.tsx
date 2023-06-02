import React, {Component} from 'react';
import styled, {StyledProps} from "styled-components";

const StyledButton = styled.button`
  border:none;
  padding: 10px 15px;
  font-size:18px;
  cursor: pointer; 
  
  &:focus{
    outline:none;
  }
`
const Button = (props : StyledProps<any>) => {
    return <StyledButton{...props} />
}

export default Button;