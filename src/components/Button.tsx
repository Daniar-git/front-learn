import React from 'react';

type ButtonProps = {
    handleClick: (id:number) => void
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={()=>props.handleClick(1)}>Click</button>
        </div>
    );
};

export default Button;