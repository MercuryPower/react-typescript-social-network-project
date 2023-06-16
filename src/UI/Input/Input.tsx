import React from 'react';
import styled from "styled-components";


interface StyledInputProps {
    value?:string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
const StyledInput = styled.input`
  outline: none;
  border:0;
  margin-left: 0.75rem;
  width: min-content;
  box-shadow: 2px 2px 2px rgba(0, 0, 255, .2);
`
const Input = (props : StyledInputProps) => {
    return (
        <StyledInput{...props} placeholder={`What's new?`}/>
    );
};

export default Input;