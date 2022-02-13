import React from 'react';
import './CounterOutput.css'

export default function CounterOutput(props){
    return(
        <div className='CounterOutput'>
            Current Counter: { props.value }
        </div>
    );
}