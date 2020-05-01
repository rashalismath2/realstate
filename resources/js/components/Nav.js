import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"


class NavBar extends Component {

    constructor(props){
        super(props)
        this.state={
            user:{
                first_name:props.user.first_name,
                last_name:props.user.last_name,
                access_token:props.user.access_token 
            },
            SalesItems:{
                sales: [
                    "houses",
                    "apartments",
                    "commercial buildings",
                    "bungalows",
                    "villas",
                    "studios"
                ],
                rentals: [
                    "houses",
                    "apartments",
                    "commercial buildings",
                    "bungalows",
                    "rooms",
                    "villas",
                    "studios"
                ],
                lands: [
                    "bare lands",
                    "cultivated lands",
                    "tea lands",
                    "rubber lands",
                    "paddy lands",
                    "cinnamon lands"
                ]
            }

        }
    }


    render() {

        let items="";

        if(this.state.user.access_token!=null){
            items=<ul>
                    <li>
                        <div className=" dropdown">
                            <button
                                className="logout-button dropdown-toggle"
                                type="button"
                                id="logoutbutton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {this.state.user.first_name}
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="landbuttons"
                            >
                            <button>Logout</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/post-ad">
                            <button className="btn btn-sm bg-warning">
                                Post your ad
                            </button>
                        </Link>
                    </li>
                </ul>
        }
        else{
            items=<ul>
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                        <Link to="/register">
                            <li>Register</li>
                        </Link>
                        <li>
                            <Link to="/login">
                                <button className="btn btn-sm bg-warning">
                                    Post your ad
                                </button>
                            </Link>
                        </li>
                    </ul>
        }
    

        const SalesOptions = this.state.SalesItems.sales.map(type => {
            return (
                <Link to={"/results?saleType=Sales&propertyType="+type} className="dropdown-item" key={type}>
                    {type}
                </Link>
            );
        });
        const RentalOptions = this.state.SalesItems.rentals.map(type => {
            return (
                <Link to={"/results?saleType=Rentals&propertyType="+type} className="dropdown-item" key={type}>
                    {type}
                </Link>
            );
        });
        const LandOptions = this.state.SalesItems.lands.map(type => {
            return (
                <Link to={"/results?saleType=Lands&propertyType="+type} className="dropdown-item" key={type}>
                    {type}
                </Link>
            );
        });



        return (
            <header>
                <div className="title">
                    <div className="cont">
                        <div className="title-items">
                            <h3>
                                <Link to="/">
                                    <span className="title-word">Property</span>
                                    Web
                                </Link>
                            </h3>
                            {items}
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <div className="cont">
                        <nav>
                            <ul>
                                <li>
                                    <div className=" dropdown">
                                        <button
                                            className="sales-button dropdown-toggle"
                                            type="button"
                                            id="salesbutton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Sales
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="salesbutton"
                                        >
                                            {SalesOptions}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className=" dropdown">
                                        <button
                                            className="rental-button dropdown-toggle"
                                            type="button"
                                            id="rentalsbutton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Rentals
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="rentalsbutton"
                                        >
                                            {RentalOptions}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className=" dropdown">
                                        <button
                                            className="land-button dropdown-toggle"
                                            type="button"
                                            id="landbuttons"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Lands
                                        </button>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="landbuttons"
                                        >
                                            {LandOptions}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}


export default connect(mapStateToProps)(NavBar);
