import React,{Component} from "react"
import ResultList from "./ResultList"
import NewAd from "./NewAd"
import NavBar from "./Nav";
import axios from "axios"

import {connect} from "react-redux"

class ManageAd extends Component{

    constructor(){
        super()
        this.state={
            data:null,
            editData:null,
            clickedNew:true,
            clickedOld:false,
        }
        this.setComponent=this.setComponent.bind(this)
        this.editData=this.editData.bind(this)
    }

    setComponent(type){
        if(type=="new"){
            this.setState({
                editData:null,
                clickedNew:true,
                clickedOld:false
            })
        }
        else{
            this.setState({
                clickedNew:false,
                clickedOld:true
            })
        }
    }

    editData(data){
        if(data.op=="edit"){
            this.setState({
                editData:data.data,
                clickedNew:true,
                clickedOld:false
            })

        }
    }

    componentDidMount(){
        if(this.props.user.access_token==null){
            this.props.history.push("/login")
        }
        else{
            
            axios
            .get("/api/user/ad",{
                headers: {
                    "Authorization" : "Bearer "+this.props.user.access_token
                }
            })
            .then(res => {

                this.setState({
                    data: res.data
                });
            })
            .catch(e => {
                console.log(e);
            });
        }

    }

    render(){

        let ren;
            if(this.state.clickedOld){
                ren=<ResultList editData={this.editData} data={this.state.data}  />
            }
            else{
                ren=<NewAd editData={this.state.editData} />
            }
        


        return(
            <div>
            <NavBar />
                <section>
                    <div className="cont">
                        <div className="managead-containor">
                            <div className="managead-left">
                                <button onClick={()=>{this.setComponent("new")}}>New</button>
                                <button onClick={()=>{this.setComponent("old")}}>Old</button>
                            </div>
                            <div className="managead-right">
                                {ren}
                            </div>
                        
                        </div>

                    </div>
                
                </section>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(ManageAd);

