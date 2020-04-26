import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

class NewAd extends Component {
    constructor() {
        super();
        this.state = {
            title:"",
            description:"",
            price:"",
            contact:"",
            district:"",
            city:"",
            file:[],
            SalesItemsTypes:{
                "Sales":[
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Villas",
                    "Studio/Bedsit"
                ],
                "Rentals":[
                    "Houses",
                    "Apartments",
                    "Commericial Buildings",
                    "Bungalows",
                    "Rooms",
                    "Villas",
                    "Studio/Bedsit"
                ],
                "Lands":[
                    "Bare Land",
                    "Cultivated Lands",
                    "Tea Lands",
                    "Rubber Lands",
                    "Paddy Lands",
                    "cinnamon Lands"
                ],
            },
            selectedSalesType:"Rentals",
            districts:[
                {p:"Ampara",c:{lat: 7.2912, lng:81.6724}},
                {p:"Anuradhapura",c:{lat:8.3114, lng: 80.4037}},
                {p:"Badulla",c:{lat:6.9934, lng:81.0550 }},
                {p:"Batticaloa",c:{lat:7.7310, lng:81.6747 }},
                {p:"Colombo",c:{lat:6.9271, lng:79.8612 }},
                {p:"Galle",c:{lat:6.0535, lng: 80.2210}},
                {p:"Gampaha",c:{lat:7.0840, lng: 80.0098}},
                {p:"Hambantota",c:{lat:6.1429, lng:81.1212 }},
                {p:"Jaffna",c:{lat:9.6615, lng: 80.0255}},
                {p:"Kalutara",c:{lat:6.5854, lng: 79.9607}},
                {p:"Kandy",c:{lat:7.2906, lng:80.6337 }},
                {p:"Kegalle",c:{lat:7.2513, lng:80.3464 }},
                {p:"Kilinochchi",c:{lat:9.3803, lng: 80.3770}},
                {p:"Kurunegala",c:{lat:7.4818, lng:80.3609 }},
                {p:"Mannar",c:{lat:9.0585, lng: 79.8185}},
                {p:"Matale",c:{lat:7.4675, lng: 80.6234}},
                {p:"Matara",c:{lat:5.9549, lng:80.5550 }},
                {p:"Mullaitivu",c:{lat:9.2671, lng:80.8142 }},
                {p:"Nuwara Eliya",c:{lat:6.9497, lng:80.7891 }},
                {p:"Polonnaruwa",c:{lat:7.9403, lng:81.0188 }},
                {p:"Puttalam",c:{lat:8.0408, lng: 79.8394}},
                {p:"Ratnapura",c:{lat:6.7056, lng:80.3847 }},
                {p:"Trincomalee",c:{lat:8.5874, lng:81.2152 }},
                {p:"Vavuniya",c:{lat:8.7542, lng: 80.4982}}
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveFile = this.saveFile.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
    }

    saveFile(files){
        this.setState({
            file:[...this.state.file,files.target.files[0]]
        })
    }

    render() {

        const districtList=this.state.districts.map(district=>{
            return(
                <p className="dropdown-item"  key={district.p}>{district.p}</p>
            )
        })

        const salesSubtypes =this.state.SalesItemsTypes[this.state.selectedSalesType].map(type=>{
            return(
                <a className="dropdown-item" onClick={()=>this.setState({searchPropertyType:type})} key={type}>{type}</a>
            )
        });

        return (
            <div className="NewAd-container">
                <form className="newAd-form" onSubmit={this.handleSubmit}>
                                       
                    <Input
                        className="mb-2 newAd-title"
                        placeholder="Title"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <TextField
                        className="mb-2"
                        id="newAdDetails"
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Add a description"
                    />
                    <Input
                        className="mb-2 newAd-contact"
                        placeholder="Contact"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <div className="formDropDowns">
                        <div className="dropdown">
                            <button className="district-dropdown dropdown-toggle" type="button" id="districtoptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                District
                            </button>
                            <div className="dropdown-menu" aria-labelledby="districtoptions">
                                {districtList}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="salesType-dropdown dropdown-toggle" type="button" id="salestypeOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SalesType
                            </button>
                            <div className="dropdown-menu" aria-labelledby="salestypeOptions">
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Sales"})}>Sales</a>
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Rentals"})}>Rentals</a>
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Lands"})}>Lands</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="salesSubtype-dropdown dropdown-toggle" type="button" id="salessubtypeOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SalesSubType
                            </button>
                            <div className="dropdown-menu" aria-labelledby="salessubtypeOptions">
                                {salesSubtypes}
                            </div>
                        </div>
                    </div>
                    <Input
                        className="mb-2 newAd-city"
                        placeholder="City"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <Input
                        className="mb-2 newAd-price"
                        placeholder="Price"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <div className="mb-2  newAd-files">
                        <span>{this.state.file.length} Files</span>
                        <input className="newAd-file" type="file" onChange={this.saveFile} />
                        <span>*Please upload only 4 images</span>
                    </div>
                    <button type="submit">Submit</button>
                
                    </form>
            </div>
        );
    }
}

export default NewAd;
