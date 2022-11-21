import _ from 'lodash';
import { useCallback, useState } from 'react';

export default function Q12(){
    const [value,setValue]=useState(0);
    const handleInput=()=>{
        console('debounce called after 2 seconds');
    }

    const callDebounce=useCallback(_.debounce(handleInput,2000),[]);
    
    return (
        <>
            <h1>Create an app that uses debouncing / throttling.</h1>
            <div>
                debounce function will be called after user has stopped typing for 2 seconds. ANd it will console "called"
                <input type="text" onChange={(e)=>{
                    setValue(e.target.value);
                    callDebounce();
                }}></input>
            </div>
        </>
    )

}