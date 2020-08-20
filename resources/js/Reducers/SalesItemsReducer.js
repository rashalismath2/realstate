const initState={
    SalesItems:{
        "sales":[
            "houses",
            "apartments",
            "commercial buildings",
            "bungalows",
            "villas",
            "studios"
        ],
        "rentals":[
            "houses",
            "apartments",
            "commercial buildings",
            "bungalows",
            "rooms",
            "villas",
            "studios"
        ],
        "lands":[
            "bare lands",
            "cultivated lands",
            "tea lands",
            "rubber lands",
            "paddy lands",
            "cinnamon lands"
        ],
    }
}


const SalesItemsReducer=(state=initState,actions)=>{
  
    return state
}

export default SalesItemsReducer