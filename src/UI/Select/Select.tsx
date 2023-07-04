import React from 'react';
import styled from "styled-components";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const StyledSelect = styled.select`
    border-radius: 25px;
`

export type SelectProps = {
    value:string;
    options: Option[];
    defaultValue?:string;
    onChange: (value: string) => void;
}
type Option = {
    title?:string;
    value?:string
}
const Select = ({options, defaultValue, value, onChange}:SelectProps) => {
    return (
        <div style={{marginTop:'20px'}}>
            <FontAwesomeIcon icon={faBars} /> Sort by {''}
            <StyledSelect
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(option=>
                    <option key={option.value} value={option.value}>
                        {option.title}
                    </option>
                )}
            </StyledSelect>
        </div>
    );
};

export default Select;