import React, {Component} from 'react';
import styled, {css, StyledProps} from "styled-components";


interface StyledButtonProps{
    small?:boolean;
    alignSelf?:string;
    color?:string;
    background?:string;
    margin?:string,
    padding?:string,
    font?:string;
    radius?:string;
    children: React.ReactNode;
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  border:0;
  font-size:15px;
  padding: 1rem; 
  cursor: pointer;
  box-shadow: 3px 3px  rgba(0, 0, 255, .2);
  align-self: ${props => props.alignSelf || 'stretch'};
    
  
  ${props => css`
    margin:${props.margin};
    padding:${props.padding};
  `}
  
  ${props => props.small && css`
    font-size:${props.font || '12px'};
  `}
  
  ${props => css`
    color:${props.color || 'black'};
    background: transparent;
    border-radius: ${props.radius};
  `}
  &:hover{
    ${props => css`
      color:${props.color || 'white'};
      background: ${props.background || 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(135,135,212,1) 50%, rgba(126,199,214,1) 100%)'};
      transition: ease-out 0.3s;
    `}
  }
  
`;
const Button = (props : StyledButtonProps) => {
    return <StyledButton{...props} />
}

export default Button;