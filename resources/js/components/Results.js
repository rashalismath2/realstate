import React, { Component } from "react";
import { LocationOn } from "@material-ui/icons";
import LinearProgress from '@material-ui/core/LinearProgress';
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
        this.filterByDistrict=this.filterByDistrict.bind(this)
        this.showAllData=this.showAllData.bind(this)
        this.state = {
            progressResult:false,
            location:"Island wide"
        };
    }

    componentDidMount() {
        this.setState({
            progressResult:true
        })
        axios
            .get("/api/ad" + this.props.location.search)
            .then(res => {
                this.setState({
                    progressResult:false
                })
               this.props.addPost(res.data)
               this.props.filterByDistrict(res.data)
       
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
            console.log("data ",res)    
            this.props.addPost(res.data)
            this.props.filterByDistrict(res.data)

        })
        .catch(e => {
            console.log(e);
        });
    }

    filterByDistrict(data){
        this.setState({
            location:data.name
        })
        this.props.addShowFiltered(data.data)
    }

    showAllData(){
        this.setState({
            location:"Island wide"
        })
        this.props.addShowFiltered([])
    }

    render() {
        //TODO: when we get redirected from nav, we should load new data
        console.log("re")

        let progressBar=""
        let showAllIsland=""

        if(this.state.location!=="Island wide"){
            showAllIsland=<p onClick={this.showAllData}>All Island</p>
        }
        else{
            showAllIsland=""
        }

        var showData=[]
        
        if(this.props.showFiltered.length<1 || this.props.showFiltered==null){
            showData=this.props.data
        }
        else{
            showData=this.props.showFiltered
        }


        if(this.state.progressResult){
            progressBar=<LinearProgress />
        }


        const districts = this.props.filteredByDistricts.map(district => {
            return (
                <li className="filterd-by-district" key={district.name} onClick={()=>{this.filterByDistrict(district)}} >
                    {district.name} ({district.data.length})
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
                                    <div>
                                        <h3>Location</h3>
                                        <p>{this.state.location}</p>
                                        {showAllIsland}
                                    </div>
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
                                            <p>By district</p>
                                            <ul>{districts}</ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="results-right">
                                    <div className="results-section">
                                        {progressBar}
                                        <ResultsList data={showData} />
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


const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(data)=>{
            dispatch({type:"ADD_POSTS",data:data})
        },
        addEditData:(data)=>{
            dispatch({type:"ADD_DATA",data:data})
        },
        deletePost:(data)=>{
            dispatch({type:"DELETE_POST",data:data})
        },
        filterByDistrict:(data)=>{
            dispatch({type:"FILTER_POSTS_BY_DIS",data:data})
        },
        addShowFiltered:(data)=>{
            dispatch({type:"ADD_SHOW_FILTERD",data:data})
        },

    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.RootReducer.user,
        SalesItems:state.SalesItemsReducer.SalesItems,
        data:state.PostReducer.posts,
        filteredByDistricts:state.PostReducer.FilteredByDistricts,
        showFiltered:state.PostReducer.showFiltered
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Results);
