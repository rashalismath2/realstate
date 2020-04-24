import React from "react";

const SalesItems={
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
const SalesOptions=SalesItems.sales.map(type=>{
    return(
        <a className="dropdown-item" key={type}>{type}</a>
    )
})
const RentalOptions=SalesItems.rentals.map(type=>{
    return(
        <a className="dropdown-item" key={type}>{type}</a>
    )
})
const LandOptions=SalesItems.lands.map(type=>{
    return(
        <a className="dropdown-item" key={type}>{type}</a>
    )
})

const NavBar = () => (
    
    <header>
        <div className="title">
            <div className="cont">
                <div className="title-items">
                    <h3>
                        <span className="title-word">Property</span>Web
                    </h3>
                    <ul>
                        <li>Login</li>
                        <li>Register</li>
                        <li>
                            <button className="btn btn-sm bg-warning">
                                Post your ad
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="nav">
            <div className="cont">
                <nav>
                    <ul>
                        <li>
                            <div className=" dropdown">
                                <button className="sales-button dropdown-toggle" type="button" id="salesbutton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sales
                                </button>
                                <div className="dropdown-menu" aria-labelledby="salesbutton">
                                    {SalesOptions}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className=" dropdown">
                                <button className="rental-button dropdown-toggle" type="button" id="rentalsbutton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Rentals
                                </button>
                                <div className="dropdown-menu" aria-labelledby="rentalsbutton">
                                    {RentalOptions}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className=" dropdown">
                                <button className="land-button dropdown-toggle" type="button" id="landbuttons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lands
                                </button>
                                <div className="dropdown-menu" aria-labelledby="landbuttons">
                                    {LandOptions}
                                </div>
                            </div>
                        </li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);

export default NavBar;
