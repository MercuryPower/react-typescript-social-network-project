import React from 'react';
import styled, {css} from "styled-components";

const StyledSpan = styled.span<StyledSpanProps>`
  background: ${props => props.background || 'linear-gradient(90deg, rgba(89, 83, 255, 0.8) 0%, rgba(135, 135, 212, 1) 50%, rgba(126, 199, 214, 1) 100%);'};
  color:white;
  text-shadow: black;
`
interface StyledSpanProps{
    background?: string;
    children:React.ReactNode;
}

const Span: React.FC<StyledSpanProps> = ({children}) => {
    return (
        <StyledSpan>
            {children}
        </StyledSpan>
    );
};

export default Span;