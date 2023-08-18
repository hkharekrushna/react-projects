import React from 'react';
import cssClasses from './Button.module.css';

const Button = (props) =>{

    return(
        <button className={cssClasses.button} onClick={props.onClick}   type={props.type || 'button'}>
            {props.children}
        </button>
    );
};

export default Button;