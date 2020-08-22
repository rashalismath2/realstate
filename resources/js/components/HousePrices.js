import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


import NavBar from "./Nav";

import LinearProgress from '@material-ui/core/LinearProgress'

class HousePrices extends Component {

    constructor(props) {
        super(props)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)

        this.state = {
            data: [
                { name: '2012 Q1', "Avg. Sri Lanka House Price (4-bed)": 16, "Avg. Sri Lanka Apartment Price (3-bed)": 26, "Avg. Sri Lanka Land Price (per Perch)": 1, "Avg. Colombo Land Price (per Perch)": 4 },
                { name: '2013 Q1', "Avg. Sri Lanka House Price (4-bed)": 15, "Avg. Sri Lanka Apartment Price (3-bed)": 27, "Avg. Sri Lanka Land Price (per Perch)": 1.8, "Avg. Colombo Land Price (per Perch)": 5 },
                { name: '2014 Q1', "Avg. Sri Lanka House Price (4-bed)": 20, "Avg. Sri Lanka Apartment Price (3-bed)": 26, "Avg. Sri Lanka Land Price (per Perch)": 1.5, "Avg. Colombo Land Price (per Perch)": 5 },
                { name: '2015 Q1', "Avg. Sri Lanka House Price (4-bed)": 18, "Avg. Sri Lanka Apartment Price (3-bed)": 29, "Avg. Sri Lanka Land Price (per Perch)": 2, "Avg. Colombo Land Price (per Perch)": 4 },
                { name: '2016 Q1', "Avg. Sri Lanka House Price (4-bed)": 21, "Avg. Sri Lanka Apartment Price (3-bed)": 32, "Avg. Sri Lanka Land Price (per Perch)": 1.9, "Avg. Colombo Land Price (per Perch)": 8 },
                { name: '2017 Q1', "Avg. Sri Lanka House Price (4-bed)": 24, "Avg. Sri Lanka Apartment Price (3-bed)": 30, "Avg. Sri Lanka Land Price (per Perch)": 2.1, "Avg. Colombo Land Price (per Perch)": 9 },
                { name: '2018 Q1', "Avg. Sri Lanka House Price (4-bed)": 28, "Avg. Sri Lanka Apartment Price (3-bed)": 35, "Avg. Sri Lanka Land Price (per Perch)": 2.4, "Avg. Colombo Land Price (per Perch)": 12 },
                { name: '2019 Q1', "Avg. Sri Lanka House Price (4-bed)": 27, "Avg. Sri Lanka Apartment Price (3-bed)": 38, "Avg. Sri Lanka Land Price (per Perch)": 2.8, "Avg. Colombo Land Price (per Perch)": 11 },
                { name: '2020 Q1', "Avg. Sri Lanka House Price (4-bed)": 32, "Avg. Sri Lanka Apartment Price (3-bed)": 42, "Avg. Sri Lanka Land Price (per Perch)": 3.5, "Avg. Colombo Land Price (per Perch)": 12 }
            ],
            opacity: {
                "Avg. Sri Lanka House Price (4-bed)": 1,
                "Avg. Sri Lanka Apartment Price (3-bed)": 1,
                "Avg. Sri Lanka Land Price (per Perch)": 1,
                "Avg. Colombo Land Price (per Perch)": 1,
            },
            strokes: {
                "s-hs": 1,
                "s-ln": 1,
                "s-clln": 1,
                "s-ap": 1,

            }
        }

    }

    handleMouseEnter(o) {

        const { dataKey } = o;

        var newOp = {
            "Avg. Sri Lanka House Price (4-bed)": 0.5,
            "Avg. Sri Lanka Apartment Price (3-bed)": 0.5,
            "Avg. Sri Lanka Land Price (per Perch)": 0.5,
            "Avg. Colombo Land Price (per Perch)": 0.5,
        }
        var newStr = {
            "s-hs": 1,
            "s-ln": 1,
            "s-clln": 1,
            "s-ap": 1,

        }

        switch (dataKey) {
            case "Avg. Sri Lanka House Price (4-bed)":
                this.setState({
                    opacity: { ...newOp, [dataKey]: 1 },
                    strokes: { ...newStr, ["s-hs"]: 2 }
                });
                break;
            case "Avg. Sri Lanka Apartment Price (3-bed)":
                this.setState({
                    opacity: { ...newOp, [dataKey]: 1 },
                    strokes: { ...newStr, ["s-ap"]: 2 }
                });
                break;
            case "Avg. Sri Lanka Land Price (per Perch)":
                this.setState({
                    opacity: { ...newOp, [dataKey]: 1 },
                    strokes: { ...newStr, ["s-ln"]: 2 }
                });
                break;
            case "Avg. Colombo Land Price (per Perch)":
                this.setState({
                    opacity: { ...newOp, [dataKey]: 1 },
                    strokes: { ...newStr, ["s-clln"]: 2 }
                });
                break;

            default:
            // code block
        }



    }

    render() {

        var SalesByRegion=this.props.AvgSalesByRegion.map((data,index)=>{
            return  <tr key={index}>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                    </tr>
        }) 

        var OverAllPrice=this.props.OverAllPrice.map((data,index)=>{
            return  <tr key={index}>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td><ArrowUpwardIcon /> {data.precentage}</td>
                    </tr>
        })

        const { opacity } = this.state;

        const renderLineChart = (
            <LineChart width={600} height={400} data={this.state.data} margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}>
                <Line strokeWidth={this.state.strokes["s-hs"]} type="monotone" dataKey="Avg. Sri Lanka House Price (4-bed)" strokeOpacity={opacity["Avg. Sri Lanka House Price (4-bed)"]} stroke="#424242" />
                <Line type="monotone" strokeWidth={this.state.strokes["s-ap"]} dataKey="Avg. Sri Lanka Apartment Price (3-bed)" strokeOpacity={opacity["Avg. Sri Lanka Apartment Price (3-bed)"]} stroke="#db4437" />
                <Line type="monotone" strokeWidth={this.state.strokes["s-ln"]} dataKey="Avg. Sri Lanka Land Price (per Perch)" strokeOpacity={opacity["Avg. Sri Lanka Land Price (per Perch)"]} stroke="#f4b400" />
                <Line type="monotone" strokeWidth={this.state.strokes["s-clln"]} dataKey="Avg. Colombo Land Price (per Perch)" strokeOpacity={opacity["Avg. Colombo Land Price (per Perch)"]} stroke="#0f9d58" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend onMouseEnter={this.handleMouseEnter} />
            </LineChart>
        );
        return (
            <div>
                <NavBar />
                {/* banner */}
                <section id="House-Prices">
                    <div className="cont">
                        {/* page-details */}
                        <div className="price-divs" id="page-details">
                            <h3>Average property prices of Sri Lanka</h3>
                            <p>Average Prices are based on property ads published
                            on LankaPropertyWeb.com until the stated period.
                            The prices are the advertised prices and not the final
                            selling price and may not be a true reflection of the
                            overall property prices in Sri Lanka. The prices have
                            been taken from a sample of around 15,000 property
                                ads.</p>
                        </div>
                        {/* page-details */}
                        {/* house-price-chart */}
                        <div className="price-divs" id="house-price-chart">
                            <div id="price-intro">
                                <h5>Average property prices of Sri Lanka(Overall)</h5>
                                <p>In millions of Rupees (LKR)</p>
                            </div>

                            <div >
                                {renderLineChart}
                            </div>
                        </div>
                        {/* house-price-chart */}
                        {/* overall-price */}
                        <div className="price-divs" id="overall-price">
                            <h4>Sri Lanka Overall prices for June 2020</h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Average Price (Rs.)</th>
                                        <th scope="col">Change(since last year)</th>
                                    </tr>
                                </thead>
                                <tbody>                            
                                    {OverAllPrice}
                                </tbody>
                            </table>
                        </div>
                        {/* overall-price */}
                        {/* sales-price-region */}
                        <div className="price-divs" id="sales-price-region">
                            <h4>Average Sales prices by Region for June 2020</h4>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Average Price (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SalesByRegion}
                                </tbody>
                            </table>
                        </div>
                        {/* sales-price-region */}


                    </div>
                </section>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        AvgSalesByRegion: state.PriceDataReducer.AvgSalePriceByRegion,
        OverAllPrice: state.PriceDataReducer.OverallPrice,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HousePrices);
