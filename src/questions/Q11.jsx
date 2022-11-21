import { useState } from "react"

export default function (){
    const [count,setCount]=useState(0);
    const handleCount=()=>{
        setCount(count+1);
        console.log('called',count)   
    }
    return (
        <div>
            <h1>Create an app that allows user to click a button 5 times, and times them out afterwards.</h1>
            <button disabled={count > 4} onClick={handleCount} >Clic here 5 times</button>
           
        </div>
    )
}