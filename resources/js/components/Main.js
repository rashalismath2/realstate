import React,{Component} from 'react';
import Search from "./Search"
import SearchBar from './Search';
import Map from "./Map"
import SalesItems from './SalesItems';
import Footer from "./Footer"

class Main extends Component{

    constructor(){
        super()
        this.state={
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
    }

    render(){


        return(
            <div>

                {/* banner */}
                <section className="main-banner">
                    <div className="cont">
                        <div className="banner-items">
                            <div>
                                <h3 className="main-banner-title">Find your dream property</h3>
                                <p className="main-banner-subtitile">Choose from 20000+ properties in Sri Lanka's largest Real Estate Website</p>
                            </div>
                            <SearchBar />
                        </div>
                    </div>
                </section>

                {/* Map */}
                <section className="map-section">
                    <div className="cont">
                        <div className="map-container">
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
                        <SalesItems SalesItems={this.state.SalesItems} />
                    </div>
                </section>

            </div>
        )
    
    }
}


export default Main


