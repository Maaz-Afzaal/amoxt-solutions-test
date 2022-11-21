import * as Actions from '../actions/apiActions';

const initialState={
    data:[],
    error:[],
    todoList:[],
}

const apiReducer=(state = initialState, action)=>{
    const { type, payload } = action;
    switch (type) {
        case Actions.GET_API_DATA:
            const arr=[...new Array(100)]
            return (state={
                ...state,data:[...arr?.map((item,i)=>{
                    return {...payload,index:i};
                })]
            })
        case Actions.ADD_TODO:
            return (
                state={
                    ...state,todoList:[...payload]
                }
            )
        case Actions.REMOVE_TODO:
            return (state={...state,todoList:state.todoList?.filter((item,i)=>i!==payload)})
        default:
            return state;
    }
}
export default apiReducer;