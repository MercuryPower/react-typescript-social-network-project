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
    yesBtn?:boolean;
    noBtn?:boolean;
    reversed?:boolean;
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
  border-radius: 25px;
  
  ${props => css`
    margin:${props.margin};
    padding:${props.padding};
  `}
  
  ${props => props.small && css`
    font-size:${props.font || '12px'};
  `}
  
  ${props => css`
    color:${props.color || 'white'};
    background: ${props.background || 'transparent'};
    border-radius: ${props.radius};
  `}
  &:hover {
    color: ${props => (props.color === 'white' ? 'black' : 'white')};
    background: ${props => (props.color === 'white' ? 'white' : 'black')};
    transition: ease-in 0.3s;
  }
    
    
  ${props => props.yesBtn && css`
    background: rgba(102, 255, 102, 1) 50%;
  `}
  ${props => props.noBtn && css`
    background:rgba(255, 102, 102, 1) 50%;
  `}
  
`;
const Button = (props : StyledButtonProps) => {
    return <StyledButton{...props} />
}

export default Button;