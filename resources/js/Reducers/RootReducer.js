const initState={
    user:{
        first_name:localStorage.getItem('first_name'),
        last_name:localStorage.getItem('last_name'),
        access_token:localStorage.getItem('access_token'),
        id:localStorage.getItem("user_id")
    }
}


const RootReducer=(state=initState,actions)=>{
    if(actions.type=="ADD-USER"){
        let user=actions.user

        return {
            ...state,
            user:user
        }
    }
    return state
}

export default RootReducer