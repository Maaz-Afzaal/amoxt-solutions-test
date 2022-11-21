import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitFormData } from "../redux/actions/apiActions";

export default function Q6 (){
    const [values,setValues]=useState({name:'',age:null});

    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(submitFormData(values))
    }
    return (
        <><div>
            <h1>Create a form that gathers user;s data and sends it to server.</h1>
            <form onSubmit={handleSubmit}>
                <label >Name </label>
                <input type={"text"} onChange={handleChange} name="name" />
                <label>Age</label>
                <input type={"number"} onChange={handleChange} name="age" />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
            
        </>
    )
}