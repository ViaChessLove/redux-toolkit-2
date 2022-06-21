import React, { memo } from 'react'

interface InputProps{
    placeholder?: string;
    onChange?: (value: any) => void;
    className?: string;
    name?: string;
    backgroundColor?: any;
    value?: string;
}

const Input: React.FC<InputProps> = memo(({value, name, backgroundColor, className, placeholder, onChange}) => {
    return <input value={value} className={className} name={name} placeholder={placeholder} type='text' onChange={onChange}/>;    
});

export default Input
