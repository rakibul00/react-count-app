import React, {useState} from 'react'
import "./first.css"

export default function Firstapp() {
    const [count, setcount] = useState(0);
    const Incriment = () =>{
        setcount(count +1)
    }
    const Descriment = () =>{
        setcount(count -1)
    }
    
  return (
    <div className='all-div'>
        <h1 className='text-h2'>count 1</h1>
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
