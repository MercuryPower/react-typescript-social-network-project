import React, {Component} from 'react';
import styled, {css, StyledProps} from "styled-components";


interface StyledButtonProps{
    small?:boolean;
    alignSelf?:string;
    color?:string;
    background?:string;
    font?:string;
}
interface ButtonProps {
    children: React.ReactNode;
    small?: boolean;
}

const StyledButton = styled.div<StyledButtonProps>`
  border:0;
  font-size:15px;
  padding: 1rem; 
  cursor: pointer;
  box-shadow: 3px 3px  rgba(0, 0, 255, .2);
  align-self: ${props => props.alignSelf || 'stretch'};
    
  
  ${props => props.small && css`
    font-size:${props.font || '12px'};
  `}
  
  ${props => css`
    color:${props.color || 'black'};
    background: transparent;
  `}
  &:hover{
    ${props => css`
      color:${props.color || 'white'};
      background: ${props.background || 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(135,135,212,1) 50%, rgba(126,199,214,1) 100%)'};
      transition: ease-out 0.3s;
    `}
  }
  
`;
const Button = (props : ButtonProps) => {
    return <StyledButton{...props} />
}

export default Button;