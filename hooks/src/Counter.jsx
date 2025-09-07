import React, { useEffect, useState } from 'react'

function Counter(){
    let [count, setCount] = useState(0);

    function incCount (){
       setCount(count+1);
    };

    useEffect(function printSomething(){
      console.log("This is a side effect");
    });

  return (
    <div>
        <h2>count = {count}</h2>
        <button onClick={incCount}>Increase Count</button>
      
    </div>
  )
}

export default Counter;
