import { useState } from "react"

export default function Q7(){

    const [states,useStates]=useState([...new Array(8)?.map((item)=>{return false})])
    console.log(states);
    return(
        <div>
            <h1>Tic Tac Toe Game</h1>

        </div>
    )
}