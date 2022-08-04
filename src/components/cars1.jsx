import React from 'react';

const Car1 = (props) => {
    return (
        <div>
            <input  type="text"  onChange={props.handleChang}/>
            <h1>{props.num}</h1>
        </div>
    )
}
export default Car1;