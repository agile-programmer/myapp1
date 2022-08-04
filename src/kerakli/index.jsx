import React from 'react';

const Index = (props) => {
    return (
       <div>
            <input  type='text' onChange={props.handleChange}/>
            <h1>{props.num}</h1>
       </div> 
    )
}

export default Index;