import React from 'react';
import './CounterControl.css';

export default function CounterControl(props){
    console.log(props);
    return(
        <div className='CounterControl' onClick={props.clicked} >
            {props.label}
        </div>
    );
}