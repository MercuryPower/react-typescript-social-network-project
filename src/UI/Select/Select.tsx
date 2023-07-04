import React from 'react';
import styled from "styled-components";
<<<<<<< HEAD
import {faBars, faSort} from "@fortawesome/free-solid-svg-icons";
=======
import {faBars} from "@fortawesome/free-solid-svg-icons";
>>>>>>> 82e66c356a9a9fbcda28a793477d1f1a07e66901
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
            <FontAwesomeIcon icon={faSort} /> Sort by {''}
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