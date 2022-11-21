import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions/apiActions";

export default function Q4(){
    const [todo,setTodo]=useState('');
    const todoList=useSelector((state)=>state.apiReducer.todoList);

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTodo(todoList,todo))
    }
    return (
        <>
            <h1>To DO AP</h1>
            <div>
                <input type={"text"} value={todo} onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button> 
            </div>
            <div>
                <h3>
                    Your todo list
                </h3>
                {
                    todoList?.length>0 && todoList?.map((item,i)=>{
                        return (
                            <>
                                <div style={{display:'flex'}}>
                                    <div>{item}</div>
                                    <div>
                                        <button onClick={()=>{
                                            dispatch(removeTodo(i));
                                        }}>Remove todo</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}