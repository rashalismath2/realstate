const initState={
    data:[],
    clickedNew:false,
    clickedOld:true
}


const EditDataReducer=(state=initState,actions)=>{
    if(actions.type==="ADD_DATA"){
        
        return{
            data:actions.data,
            clickedNew:true,
            clickedOld:false
        }
    }

    return state
    
}

export default EditDataReducer