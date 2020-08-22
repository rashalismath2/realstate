const initState={
    AvgSalePriceByRegion:[
        {title:"Colombo House Sale price",price:"143.15 million"},
        {title:"Colombo Apartment Sale price",price:"48.99 million"},
        {title:"Colombo Commercial Buildings Sale price",price:"329.22 million"},
        {title:"Western Province (apart from Colombo city) House Sale price",price:"33.76 million"},
        {title:"Southern province House Sale price",price:"25.29 million"},
        {title:"Central province House Sale price",price:"29.04 million"},
        {title:"North West province House Sale price",price:"22.16 million"},
        {title:"North Central province House Sale price",price:"Insufficient data"},
        {title:"Uva province House Sale price",price:"Insufficient data"},
    ],
    OverallPrice:[
        {title:"Sri Lanka Overall Residential Land price",price:"1.72 million Per perch",precentage:"10.26%"},
        {title:"Sri Lanka Overall Commercial Buildings Sale price",price:"169.04 million",precentage:"24.45%"},
        {title:"Sri Lanka Overall Apartment Sale price",price:"41.35 million",precentage:"2.96%"},
        {title:"Sri Lanka Overall House Sale price",price:"37.33 million",precentage:"1.77%"},
    ]
}


const PriceDataReducer=(state=initState,actions)=>{
    if(actions.type==="ADD_DATA"){
        

    }

    return state
    
}

export default PriceDataReducer