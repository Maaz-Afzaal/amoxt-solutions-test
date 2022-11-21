import axios from "axios";

const url='https://www.boredapi.com/api/activity';

export const GET_API_DATA='[GET API] GET_API_DATA';
export const DATA_SUBMITED='[POST API] DATA_SUBMITED'
export const ADD_TODO='[TODO] ADD_TODO';
export const REMOVE_TODO='[TODO] REMOVE_TODO';


export const getApiData= ()=>{
    return async (dispatch)=>{
    const results=await axios.get(url);
        dispatch({
            type:GET_API_DATA,
            payload:results.data,
        })
    }
}

export const submitFormData=(data)=>{
    return async (dispatch) =>{
        const res=await axios.post('url here',JSON.stringify(data));
        dispatch({
            type:DATA_SUBMITED,
            payload:true
        })
    }
}

export const addTodo=(list,todo)=>{
    const res=[...list];
    res.push(todo)
    return ({
        type:ADD_TODO,
        payload:res
    })
}

export const removeTodo=(data)=>{
    return ({
        type:REMOVE_TODO,
        payload:data
    })
}