import React,{Component} from 'react';
import Search from "./Search"
import SearchBar from './Search';
import Map from "./Map"
import SalesItems from './SalesItems';
import Statistics from "./Statistics"
import Footer from "./Footer"
import NavBar from "./Nav";

import {connect} from "react-redux"


class Main extends Component{

    constructor(){
        super()
        this.SearchForQuery=this.SearchForQuery.bind(this)
        this.state={

        } 
    }


    SearchForQuery(query){
        this.props.history.push("results"+query)
    }

    render(){


        return(
            <div>
                <NavBar />
                {/* banner */}
                <section className="main-banner">
                    <div className="cont">
                        <div className="banner-items">
                            <div>
                                <h3 className="main-banner-title">Find your dream property</h3>
                                <p className="main-banner-subtitile">Choose from 20000+ properties in Sri Lanka's largest Real Estate Website</p>
                            </div>
                            <SearchBar SearchForQuery={this.SearchForQuery} />
                        </div>
                    </div>
                </section>

                {/* Map */}
                <section className="map-section">
                    <div className="cont">
                        <div className="map-container inner-container">
                            <div className="welcome-message">
                                <div>
                                    <h2 className="welcome-message-title">
                                        Welcome to <span className="title-word">Property</span>Web.lk - the largest marketplace in Sri Lanka!
                                    </h2>
                                    <p className="welcome-message-subtitle">
                                        Buy and sell properties or search for property in Sri Lanka!
                                    </p>
                                    <h3>Search by your city or select your place to get started</h3>
                                </div>
                            </div>
                            
                            <div className="map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sales items section */}

                <section >
                    <div className="cont">
                        <SalesItems SalesItems={this.props.SalesItems} />
                    </div>
                </section>

                <section >
                    <div className="cont">
                        <Statistics />
                    </div>
                </section>

            </div>
        )
    
    }
}

const mapStateToProps=(state)=>{

    return{
        SalesItems:state.SalesItemsReducer.SalesItems
    }
}

export default connect(mapStateToProps)(Main)


