import React, {Component} from 'react';
import styled from "styled-components";

interface StyledFlexProps{
    direction?:string;
    alignItems?:string;
    justifyContent?:string;
    margin?:string;
}
interface FlexProps {
    children?: React.ReactNode;
    [key: string]: any;
}
const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  margin: ${({margin}) => margin || '0'};
`
const Flex = (props : FlexProps) =>{
    return <StyledFlex{...props}  />
}

export default Flex;