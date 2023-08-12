import React from 'react'

const Stock = (props) => {
    const symbol = props.match.params.symbol;
    const loaded = () => {  
     return (
         <div>   
            <h1>A single stock</h1> 
            <h2>{symbol}</h2>
         </div>
     )
    }
      return loaded();
    };
    

export default Stock