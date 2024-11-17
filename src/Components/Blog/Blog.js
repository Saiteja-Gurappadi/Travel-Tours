import React, { useState } from 'react'
import './BlogStyle.css'
const Blog = () => {
    const [change,setChange] = useState("Sai");
    const [count,setCount] = useState(0);
    const handleRename = ()=>{
        setChange("Snake")
        
        if (count>=10 && count <30){
            setCount(count+10)
        }
    
        else{
            setCount(count+1)

        }
    }
  return (
    <div>
        <h1>hi my name is {change} {count}</h1>
        <button onClick={handleRename}>{change}</button>
    </div>
  )
}

export default Blog