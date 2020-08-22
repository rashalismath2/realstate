const initState={
    posts:[],
    FilteredByDistricts:[],
    showFiltered:[]
}


const PostReducer=(state=initState,actions)=>{
    if(actions.type==="ADD_POSTS"){
        return{
            ...state,
            posts:actions.data
        }
    }
    else if(actions.type==="ADD_SHOW_FILTERD"){
        return{
            ...state,
            showFiltered:actions.data
        }
    }
    else if(actions.type=="FILTER_POSTS_BY_DIS"){
            var ByDistricts=[]
            var found=false;

            actions.data.forEach(post => {
                    ByDistricts.forEach(dis=>{
                        if(dis.name===post.city.district.name){
                            found=true
                            dis.data.push(post)
                        }
                    })

                    
                    if(!found){
                        ByDistricts.push({
                            name:post.city.district.name,
                            data:[post]
                        })
                    }
            });

            return {
                ...state,
                FilteredByDistricts:ByDistricts
            }

    }
    else if(actions.type==="DELETE_POST"){
        let data=state.posts.filter(d=>{
            return d.id!=actions.data.id
        })
        return{
            ...state,
            posts:data
        }
    }

    return state
    
}

export default PostReducer