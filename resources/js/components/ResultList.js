import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';

import {connect} from "react-redux"


class ResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
        this.handleEditOption=this.handleEditOption.bind(this)
    }

    handleEditOption(btn){
        this.props.editData(btn)
    }

    render() {

        let data;
        
        if(this.props.data!=null && this.props.data.length>0){
            let edit;
            data=this.props.data.map(item => {
                if(item.user_id==this.props.user.id){
                    edit=  <div className="card-item-option-dropdown dropdown ">
                                
                                <button
                                    className="edit-item dropdown-toggle"
                                    type="button"
                                    id="edit-item"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                   
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-left result-item-option"
                                    aria-labelledby="edit-item"
                                >
                                   <a className="dropdown-item" onClick={()=>{this.handleEditOption({data:item,op:"edit"})}} >Edit</a>
                                   <a className="dropdown-item" onClick={()=>{this.handleEditOption({data:item,op:"delete"})}}>Delete</a>
                                </div>
                            </div>
                }
                return(
                    <ListItem className="result-list" key={item.id}>
                    <Card className="result-card">
                        <div className="clearfix result-card-item">
                            <CardMedia
                                className="result-card-image"
                                image={"/storage/adcovers/"+item.sales_images[0].image_url}
                                
                            />
                          
                            <CardContent className="result-card-content">
                                <div  className="card-item-options">
                                    <Typography component="h5" variant="h5">
                                        <Link to={"/result/"+item.id}>{item.title}</Link>
                                    </Typography>
                                    {edit}
                                </div>
                                <p>
                                    {item.description}
                                </p>
                                <p>LKR.{item.price} Lakh</p>
                            </CardContent>
                            <div className="">{/* */}</div>
                        </div>
                    </Card>
                </ListItem>     
                )
            });
        }
        else if(this.props.data==null){
            data=<div>
                    <LinearProgress />
                    <div><h3>No data found</h3></div>
                    </div>
        }
        else{
            data=<div><h3>No data found</h3></div>
        }

        return(
            
            <List className="">
                {data}
            </List>
        );

    }
}

const mapStateToProps=(state)=>{

    return{
        user:state.RootReducer.user,
    }
}

export default connect(mapStateToProps)(ResultsList);
