import React, { memo } from 'react'

interface InputProps{
    placeholder?: string;
    onChange?: (value: any) => void;
    className?: string;
    name?: string;
    backgroundColor?: any;
}

const Input: React.FC<InputProps> = memo(({name, backgroundColor, className, placeholder, onChange}) => {
    return <input className={className} name={name} placeholder={placeholder} type='text' onChange={onChange}/>;    
});

export default Input
