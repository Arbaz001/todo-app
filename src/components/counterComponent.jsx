import React,{useState} from "react";

const CounterComponent= () => {
    const[count,setCount]=useState(0);
    return(
        <div className="counter-area">
            
            <button onClick={() =>setCount(count-1)}>-</button>
            <p className="counter-text">Count is {count}</p>
            <button onClick={() =>setCount(count+1)}>+</button>
            <h6>Number is {count%2===0 ? 'Even' : 'Odd'}</h6>
            
        </div>
    );
};

export default CounterComponent;