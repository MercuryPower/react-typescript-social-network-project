import React from 'react';
import styled from "styled-components";


interface StyledInputProps {
    placeholder?:string;
    value?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
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
const Input = (props : StyledInputProps) => {
    return (
        <StyledInput{...props}/>
    );
};

export default Input;