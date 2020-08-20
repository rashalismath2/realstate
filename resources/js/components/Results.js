import React, { Component } from "react";
import { LocationOn } from "@material-ui/icons";
import SearchBar from "./Search";
import ResultsList from "./ResultList";
import queryString from "query-string";
import { connect } from "react-redux";

import NavBar from "./Nav";

import axios from "axios";

class Results extends Component {
    constructor(props) {
        super(props);
        this.SearchForQuery=this.SearchForQuery.bind(this)
        this.state = {
            data: null,
            SalesItems: {
                Sales: [
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Villas",
                    "Studio/Bedsit"
                ],
                Rentals: [
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Rooms",
                    "Villas",
                    "Studio/Bedsit"
                ],
                Lands: [
                    "Bare Land",
                    "Cultivated Lands",
                    "Tea Lands",
                    "Rubber Lands",
                    "Paddy Lands",
                    "cinnamon Lands"
                ]
            }
        };
    }

    componentDidMount() {
        console.error(this.props.location)
        axios
            .get("/api/ad" + this.props.location.search)
            .then(res => {
                console.error(res)
                this.setState({
                    data: res.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }
  
    SearchForQuery(query){
        this.setState({
            data:null
        })
        axios
        .get("/api/ad" + query)
        .then(res => {
            console.log(res);
            this.setState({
                data: res.data
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const Sales = this.state.SalesItems.Sales.map(sale => {
            return (
                <li key={sale} className="">
                    {sale}{" "}
                </li>
            );
        });
        const Rentals = this.state.SalesItems.Rentals.map(rental => {
            return (
                <li key={rental} className="">
                    {rental}{" "}
                </li>
            );
        });
        const Lands = this.state.SalesItems.Lands.map(land => {
            return (
                <li key={land} className="">
                    {land}{" "}
                </li>
            );
        });

        return (
            <div>
                <NavBar />
                <section>
                    <div className="cont">
                        <div className="results-container">
                            <div className="results-section-one">
                                <div className="results-location">
                                    <LocationOn fontSize="large" />
                                    <h3>Location</h3>
                                </div>
                                <div className="results-search-box">
                                    <SearchBar SearchForQuery={this.SearchForQuery} />
                                </div>
                            </div>

                            <div className="results-section-two">
                                <div className="results-left">
                                    <div className="results-sort">
                                        <p>Sorts results by</p>
                                        <div className=" dropdown">
                                            <button
                                                className="sorting-options dropdown-toggle"
                                                type="button"
                                                id="sorting-options-button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Sort items by
                                            </button>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="sorting-options-button"
                                            >
                                                <a>Hi there</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="results-sales-items">
                                        <div className="sales-items-list">
                                            <p>For sales</p>
                                            <ul>{Sales}</ul>
                                        </div>
                                        <div className="sales-items-list">
                                            <p>For rentals</p>
                                            <ul>{Rentals}</ul>
                                        </div>
                                        <div className="sales-items-list">
                                            <p>Lands</p>
                                            <ul>{Lands}</ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="results-right">
                                    <div className="results-section">
                                        <ResultsList data={this.state.data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Results);
