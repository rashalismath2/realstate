const initState={
    posts:[]
}


const PostReducer=(state=initState,actions)=>{
    if(actions.type==="ADD_POSTS"){
        return{
            posts:actions.data
        }
    }
    else if(actions.type==="DELETE_POST"){
        let data=state.posts.filter(d=>{
            return d.id!=actions.data.id
        })
        return{
            posts:data
        }
    }

    return state
    
}

export default PostReducer