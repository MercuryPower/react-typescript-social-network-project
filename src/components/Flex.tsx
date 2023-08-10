import React, {Component} from 'react';
import styled from "styled-components";

interface StyledFlexProps{
    direction?:string;
    alignItems?:string;
    justifyContent?:string;
    margin?:string;
    padding?:string;
    gap?:string;
    wrap?:string;
}
interface FlexProps {
    [key: string]: any;
}
const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  gap: ${props => props.gap};
`
const Flex = (props : FlexProps) =>{
    return <StyledFlex{...props}  />
}

export default Flex;