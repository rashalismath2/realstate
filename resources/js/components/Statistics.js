import React from "react"
import { Link } from "react-router-dom";

const Statistics=(props)=>{


    return(
        <div className="stat-cont inner-container">
            <div className="home-price-calc-cont">
                    <h2 className="stat-cont-div-head">Home Loan Calculator</h2>
                    <p className="stat-cont-div-subhead">Find how much you can save with our <Link to="/loan-calculator">Home Loan Calculator</Link> </p> 
                    <Link to="/loan-calculator"><img className="stat-cont-div-img" src="../images/home-loan.webp" alt="Card image cap" /></Link>
            </div>
            <div className="house-prices">
                <h2 className="stat-cont-div-head">Home Prices</h2>
                <p className="stat-cont-div-subhead">Find national property trends with our <Link to="/loan-calculator">House Price Index </Link></p>
                <Link to="/loan-calculator"><img className="stat-cont-div-img" src="../images/price-chart.webp" alt="Card image cap" /></Link>
            </div>
        </div>
    )

}

export default Statistics