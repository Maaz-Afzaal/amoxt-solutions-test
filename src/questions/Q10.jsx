import { useEffect, useState } from "react"

export default function Q10(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCount(count+1);
        },1000)
        return ()=>{
            clearInterval(intervalId);
        }
    },[count]);

    return (
        <div>
            <h1>Create an app that allows user to click a button 5 times, and times them out afterwards.</h1>
            {count}
        </div>
    )
}