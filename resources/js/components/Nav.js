import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import {connect} from "react-redux"

import LinearProgress from '@material-ui/core/LinearProgress'

class NavBar extends Component {

    constructor(props){
        super(props)
        this.state={
            progressResult:false

        }

        this.logout=this.logout.bind(this)
    }

    logout(e){
        e.preventDefault()
        this.setState({
            progressResult:true
        })

        axios({
            method:"GET",
            url:"/api/user/logout",
            headers: {
                "Authorization" : "Bearer "+this.props.user.access_token
              }
        })
        .then(res=>{

            localStorage.clear("user_id")
            localStorage.clear("last_name")
            localStorage.clear("access_token")
            localStorage.clear("first_name")

            this.props.clearUser()

            this.setState({
                progressResult:false
            })
            this.props.history.push("/")
        })
        .catch(e=>{
            console.log(e)
        })

    }


    render() {

        let  ProgressBar=<div></div>
        if(this.state.progressResult){
            ProgressBar=<LinearProgress color="secondary" />
        }


        let items="";
    
        if(this.props.user.access_token!=null){
            items=<ul>
                    <li>
                        <div className=" dropdown">
                            <button
                                className="logout-button dropdown-toggle btn btn-sm bg-warning"
                                type="button"
                                id="logoutbutton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {this.props.user.first_name}
                            </button>
                            <div
                                className="dropdown-menu dropdown-menu-left"
                                aria-labelledby="landbuttons"
                            >
                                <button onClick={this.logout} className="dropdown-item">Logout</button>
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
    

        const SalesOptions = this.props.SalesItems.sales.map(type => {
            return (
                <Link to={"/results?saleType=Sales&propertyType="+type} className="dropdown-item" key={type}>
                    {type}
                </Link>
            );
        });
        const RentalOptions = this.props.SalesItems.rentals.map(type => {
            return (
                <Link to={"/results?saleType=Rentals&propertyType="+type} className="dropdown-item" key={type}>
                    {type}
                </Link>
            );
        });
        const LandOptions = this.props.SalesItems.lands.map(type => {
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
                <div>{ProgressBar}</div>
                
            </header>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.RootReducer.user,
        SalesItems:state.SalesItemsReducer.SalesItems
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        clearUser:()=>{dispatch({type:"CLEAR_USER"})}
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar));
