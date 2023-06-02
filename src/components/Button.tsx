import React, {Component} from 'react';
import styled, {css, StyledProps} from "styled-components";

interface StyledButtonProps{
    alignSelf?:string;
    primary?:boolean;
    outlined?:boolean;
    color?:string;
    background?:string;
}
interface ButtonProps {
    children?: React.ReactNode;
    [key: string]: any;
}

const StyledButton = styled.div<StyledButtonProps>`
  border:0;
  padding: 10px 15px;
  font-size:15px;
  cursor: pointer;
  box-shadow: 3px 3px  rgba(0, 0, 255, .2);
  
  align-self: ${props => props.alignSelf || 'stretch'};
  ${props => props.primary && css`
    color:${props.color || 'black'};
    background: transparent;
  `}
  &:hover{
    ${props => props.outlined && css`
      color:${props.color || 'white'};
      background: ${props.background || 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(135,135,212,1) 50%, rgba(126,199,214,1) 100%)'};
      transition: ease 0.75s;
    `}
  }
  
`;
const Button = (props : ButtonProps) => {
    return <StyledButton{...props} />
}

export default Button;