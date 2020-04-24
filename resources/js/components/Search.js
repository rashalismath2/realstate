import React,{Component} from 'react';


class SearchBar extends Component{

    constructor(){
        super()
        this.searchForResults = this.searchForResults.bind(this);
        this.setSearchCity = this.setSearchCity.bind(this);
        this.state={
                "Sales":[
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Villas",
                    "Studio/Bedsit"
                ],
                "Rentals":[
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Rooms",
                    "Villas",
                    "Studio/Bedsit"
                ],
                "Lands":[
                    "Bare Land",
                    "Cultivated Lands",
                    "Tea Lands",
                    "Rubber Lands",
                    "Paddy Lands",
                    "cinnamon Lands"
                ],
                "MaxPrice":[
                    10,20,30,40,50,60,70,80,90,100
                ],
                searchType:"Sales",
                searchCity:"",
                searchMaxPrice:"Max price",
                searchPropertyType:"Property type"
            
        }
    }

    setSearchCity(stringSearched){
        this.setState({
            searchCity:stringSearched.target.value
        })
    }

    searchForResults(){
        console.log(this.state.searchCity)
        console.log(this.state.searchType)
        console.log(this.state.searchMaxPrice)
        console.log(this.state.searchPropertyType)
    }

    render(){
        const selectedSearchType=this.state.searchType
        const propertyType=this.state[selectedSearchType].map(type=>{
            return(
                <a className="dropdown-item" onClick={()=>this.setState({searchPropertyType:type})} key={type}>{type}</a>
            )
        })

        const maxPrice=this.state.MaxPrice.map(price=>{
            return(
                <a className="dropdown-item" onClick={()=>this.setState({searchMaxPrice:price})} key={price}>{price} Lax</a>
            )
        })

        return(
            <div className="search">
                <div className="search-buttons">
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type", searchType:"Sales"})} className="">Sales</button>
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type",searchType:"Rentals"})} className="">Rentals</button>
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type",searchType:"Lands"})} className="">Lands</button>
                </div>
                <div className="search-bar">
                    <input onChange={this.setSearchCity} placeholder="Type a city name" />
                    <div>

                        <div className=" dropdown">
                            <button className="search-bar-buttons dropdown-toggle" type="button" id="salespropertyType" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.searchPropertyType}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="salespropertyType">
                                {propertyType}
                            </div>
                        </div>
                       
                        <div className=" dropdown">
                            <button className="search-bar-buttons dropdown-toggle" type="button" id="maxPriceButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.searchMaxPrice} Lax
                            </button>
                            <div className="dropdown-menu" aria-labelledby="maxPriceButton">
                                {maxPrice}
                            </div>
                        </div>
                        
                        <button onClick={this.searchForResults} className="search-bar-buttons btn btn-warning">Search</button>
                    </div>
                </div>
            </div>

        )

    }

}

export default SearchBar