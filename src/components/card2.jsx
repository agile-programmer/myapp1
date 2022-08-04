import React from 'react';

const Car2 = (props) => {
    return (
        <div>
            <button onClick={props.handleQosh}>qoshish</button>
            <button onClick={props.handleAyrish}>ayrish</button>
            <button onClick={props.handleQosh1}>штз+</button>
            <button onClick={props.handleAyrish1}>-add</button>
        </div>
    )
}
export default Car2;