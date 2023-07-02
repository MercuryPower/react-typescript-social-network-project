import React from 'react';

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
            Sort by {''}
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(option=>
                    <option key={option.value} value={option.value}>
                        {option.title};
                    </option>
                )}
            </select>
        </div>
    );
};

export default Select;