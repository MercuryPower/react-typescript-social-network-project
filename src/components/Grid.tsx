import React from 'react';
import styled from "styled-components";

interface StyledGridProps{
}

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: 7% 35% 7%;
  align-self: center;
  justify-self: center;
  justify-content: center;
`
const Flex = (props : StyledGridProps) =>{
    return <StyledGrid{...props}  />
}

export default Flex;