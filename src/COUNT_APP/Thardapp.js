import React,{useState} from 'react'
import "./thard.css"

export default function Thardapp() {
  const [count, setcount] = useState(0);
  const Incriment = () =>{
      setcount(count +100)
  }
  const Descriment = () =>{
      setcount(count -100)
  }
  
return (
  <div className='all-div'>
      <h1 className='text-h2'>count 100</h1>
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