import React, { Component } from "react";
import { LocationOn } from "@material-ui/icons";
import SearchBar from "./Search";
import ResultsList from './ResultList';

class Results extends Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        const Sales = this.state.SalesItems.Sales.map(sale => {
            return (
                <li key={sale} className="">{sale} </li>
            );
        });
        const Rentals = this.state.SalesItems.Rentals.map(rental => {
            return (
                <li key={rental} className="">{rental} </li>
            );
        });
        const Lands = this.state.SalesItems.Lands.map(land => {
            return (
                <li key={land} className="">{land} </li>
            );
        });
       
        return (
            <section>
                <div className="cont">
                    <div className="results-container">
                        <div className="results-section-one">
                            <div className="results-location">
                                <LocationOn fontSize="large" />
                                <h3>Location</h3>
                            </div>
                            <div className="results-search-box">
                                <SearchBar />
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
                                <div className="results-section"><ResultsList /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Results;
