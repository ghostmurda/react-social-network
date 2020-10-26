import React from "react";
import './Button.css';

function Button(props){
    return (
        <button className="btn"
                type={props.type ? props.type : ''}
                disabled={props.disabled ? props.disabled : ''}
        >
            {props.btnName}
        </button>
    );
}

export default Button;