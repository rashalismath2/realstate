import React,{Component} from 'react';
import {withRouter} from "react-router-dom"

import {connect} from "react-redux"


class SearchBar extends Component{

    constructor(){
        super()
        this.searchForResults = this.searchForResults.bind(this);
        this.setSearchCity = this.setSearchCity.bind(this);
        this.state={
                "MaxPrice":[
                    10,20,30,40,50,60,70,80,90,100
                ],
                searchType:"sales",
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

        const query="?searchCity="+
                this.state.searchCity+"&saleType="+
                this.state.searchType+"&searchMaxPrice="+
                this.state.searchMaxPrice+"&saleSubType="+this.state.searchPropertyType
        
        this.props.SearchForQuery(query)

    }

    render(){
        const selectedSearchType=this.state.searchType
        const propertyType=this.props.SalesItems[selectedSearchType].map(type=>{
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
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type", searchType:"sales"})} className="">Sales</button>
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type",searchType:"rentals"})} className="">Rentals</button>
                    <button onClick={()=>this.setState({searchMaxPrice:"Max Price", searchPropertyType:"Property type",searchType:"lands"})} className="">Lands</button>
                </div>
                <div className="search-bar">
                    <input onChange={this.setSearchCity} placeholder="Type a city name" />
                    <div className="search-bar-buttons-cont">

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

const mapStateToProps=(state)=>{
    return{
        SalesItems:state.SalesItemsReducer.SalesItems
    }
}

export default withRouter(connect(mapStateToProps)(SearchBar))