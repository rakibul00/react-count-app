import React, {useState} from 'react'
import "./secend.css"


export default function Secendapp() {
  const [count, setcount] = useState(0);
  const Incriment = () =>{
      setcount(count +50)
  }
  const Descriment = () =>{
      setcount(count -50)
  }
  
return (
  <div className='all-div'>
      <h1 className='text-h2'>count 50</h1>
      <div className='text-div'>
          <h1>
              Count: {count}
          </h1>
          <button onClick={Incriment}>+</button>
          <button onClick={Descriment}>-</button>
      </div>
      
      <p>power by rakib</p>
  </div>
)
}
