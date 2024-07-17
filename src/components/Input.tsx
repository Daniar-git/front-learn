import React from 'react';

type InputProp = {
    value: string
    handleChange: (value: string) => void
}

const Input = (props: InputProp) => {
    return (
        <input type="text" value={props.value} onChange={()=>props.handleChange('string')}/>
    );
};

export default Input;