import React, {ReactNode} from 'react';
import styled from "styled-components";

const StyledLi = styled.li`
    list-style-type: none;
`
interface LiProps {
    children:ReactNode
}
const Li: React.FC<LiProps> = ({children}) => {
    return (
        <StyledLi>
            {children}
        </StyledLi>
    );
};

export default Li;