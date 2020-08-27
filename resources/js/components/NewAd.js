import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

import {connect} from "react-redux"

import LinearProgress from '@material-ui/core/LinearProgress';

class NewAd extends Component {
    constructor(props) {
        super(props);
        // this.inputReference = React.createRef();
        this.state = {
            editImagefiles:[],
            adId:null,
            requestMethod:"post",
            defaultValue:'',
            progressResult:false,
            title:'',
            description:'',
            price:'',
            contact:'',
            district:"",
            city:'',
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
            selectedSalesSubType:"Rooms",
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
        // this.fileUploadAction = this.fileUploadAction.bind(this);
        this.saveFile = this.saveFile.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.fileUploadInputChange = this.fileUploadInputChange.bind(this);
    }

    componentDidMount(){

        if(this.props.editData!=null && this.props.editData.data!=null){
            var data=this.props.editData.data
            this.setState({
                adId:data.id,
                requestMethod:"patch",
                defaultValue:"",
               title:data.title,
               description:data.description,
               price:data.price,
               contact:data.user.contact_no,
               city:data.city.name,
               file:data.sales_images,
               saleType:data.saleType,
               saleSubType:data.saleSubType,
           })

        }
        else{
            this.setState({
                requestMethod:"post",
                defaultValue:"",
                progressResult:false,
               title:"",
               description:"",
               file:[],
               price:"",
               contact:"",
               city:"",
               district:"District",
               saleType:"",
               saleSubType:"",
           })
        }

    }


    handleSubmit(event) {
        this.setState({
            progressResult:true
        })
        event.preventDefault();
 
        var formData=new FormData();
        formData.set("adId",this.state.adId)
        formData.set("title",this.state.title)
        formData.set("description",this.state.description)
        formData.set("contact",this.state.contact)
        formData.set("price",this.state.price)
        formData.set("saleType",this.state.selectedSalesType)
        formData.set("saleSubType",this.state.selectedSalesSubType)
        formData.set("district",this.state.district)
        formData.set("city",this.state.city)

         
            formData.append("file_one",this.state.file[0])
            formData.append("file_two",this.state.file[1])
            formData.append("file_three",this.state.file[2])
            formData.append("file_four",this.state.file[3])
   
        
        axios({
            method:this.state.requestMethod,
            url:"/api/ad",
            data:formData,
            headers: {
                "Authorization" : "Bearer "+this.props.user.access_token
              }
        })
        .then(res=>{

            this.setState({
                    defaultValue:"",
                    progressResult:false,
                title:"",
                description:"",
                file:[],
                price:"",
                contact:"",
                city:"",
                district:"",
                saleType:"",
                saleSubType:"",
            })
        })
        .catch(e=>{
            this.setState({
                progressResult:false
            })
            console.log(e)
        })
    }

    saveFile(files){
        this.setState({
            file:files.target.files
        })
    }

    handleInputChange(e){
        if(e.target.name=="title"){
            this.setState({
                title:e.target.value
            })
        }
        else if(e.target.name=="description"){
            this.setState({
                description:e.target.value
            })
        }
        else if(e.target.name=="price"){
            this.setState({
                price:e.target.value
            })
        }
        else if(e.target.name=="city"){
            this.setState({
                city:e.target.value
            })
        }
        else if(e.target.name=="contact"){
            this.setState({
                contact:e.target.value
            })
        }
    }
 

    render() {  


        let progressBar=""

        if(this.state.progressResult){
            progressBar=<LinearProgress />
        }

        const districtList=this.state.districts.map(district=>{
            return(
                <p className="dropdown-item" onClick={()=>this.setState({district:district.p})}  key={district.p}>{district.p}</p>
            )
        })

        const salesSubtypes =this.state.SalesItemsTypes[this.state.selectedSalesType].map(type=>{
            return(
                <a className="dropdown-item" onClick={()=>this.setState({selectedSalesSubType:type})} key={type}>{type}</a>
            )
        });

        return (
            <div className="NewAd-container">
                <form className="newAd-form" onSubmit={this.handleSubmit}>
                    {progressBar}
                    <Input
                        value={this.state.title || ""}
                        name="title"
                        onChange={this.handleInputChange}
                        className="mb-2 newAd-title"
                        placeholder="Title"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <TextField
                        defaultValue={this.state.description || ""}
                        name="description"
                        onChange={this.handleInputChange}
                        className="mb-2"
                        id="newAdDetails"
                        label="Description"
                        multiline
                        rows={4}
                        placeholder="Add a description"
                    />
                    <Input
                        value={this.state.contact || ""}
                        name="contact"
                        onChange={this.handleInputChange}
                        className="mb-2 newAd-contact"
                        placeholder="Contact"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <div className="formDropDowns">
                        <div className="dropdown">
                            <button className="district-dropdown dropdown-toggle" type="button" id="districtoptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.district}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="districtoptions">
                                {districtList}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="salesType-dropdown dropdown-toggle" type="button" id="salestypeOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.selectedSalesType}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="salestypeOptions">
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Sales"})}>Sales</a>
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Rentals"})}>Rentals</a>
                            <a className="dropdown-item" onClick={()=>this.setState({selectedSalesType:"Lands"})}>Lands</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="salesSubtype-dropdown dropdown-toggle" type="button" id="salessubtypeOptions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.selectedSalesSubType}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="salessubtypeOptions">
                                {salesSubtypes}
                            </div>
                        </div>
                    </div>
                    <Input
                    value={this.state.city || ""} 
                        name="city"
                        onChange={this.handleInputChange}
                        className="mb-2 newAd-city"
                        placeholder="City"
                        inputProps={{ "aria-label": "description" }}
                    />
                    <Input
                    value={this.state.price || ""} 
                        name="price"
                        onChange={this.handleInputChange}
                        className="mb-2 newAd-price"
                        placeholder="Price"
                        inputProps={{ "aria-label": "description" }}
                    />

                    <div className="mb-2  newAd-files">
                        <input accept="image/*" className="newAd-file" multiple type="file" onChange={this.saveFile} />
                        <span>*Please upload only 4 images</span>
                    </div>
                    
                    <button type="submit">Submit</button>
                
                    </form>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return {
        user:state.RootReducer.user,
        editData:state.EditDataReducer.data,
    }
}

export default connect(mapStateToProps)(NewAd);
