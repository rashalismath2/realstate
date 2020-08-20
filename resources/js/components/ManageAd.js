import React,{Component} from "react"
import ResultList from "./ResultList"
import NewAd from "./NewAd"
import NavBar from "./Nav";
import axios from "axios"
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from "react-redux"

class ManageAd extends Component{

    constructor(){
        super()
        this.state={
            editData:null,
            clickedNew:true,
            clickedOld:false,
            progressResult:false
        }
        this.setComponent=this.setComponent.bind(this)
        this.editData=this.editData.bind(this)
    }

    setComponent(type){
        if(type=="new"){
            this.setState({
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
            this.props.addEditData(data)
            this.setState({
                editData:data.data,
                clickedNew:true,
                clickedOld:false
            })
        }
        else{
            this.setState({
                progressResult:true
            })
            axios({
                method:"delete",
                url:"/api/ad",
                data:data.data,
                headers: {
                    "Authorization" : "Bearer "+this.props.user.access_token
                }
            })
            .then(res => {
                this.props.deletePost(data.data)
                this.setState({
                    progressResult:false
                })
               
            })
            .catch(e => {
                console.log(e);
            });
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
                this.props.addPost(res.data)

            })
            .catch(e => {
                console.log(e);
            });
        }

    }

    render(){

        let ren;
            if(this.state.progressResult){
                ren=<CircularProgress color="secondary" />
            }
            else if(this.state.clickedOld){
                ren=<ResultList editData={this.editData}  />
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
        }
    }
}

const mapStateToProps=(state)=>{
    
    return{
        user:state.RootReducer.user,
        posts:state.PostReducer.posts,
        editData:state.EditDataReducer.data,
        clickedNew:state.EditDataReducer.clickedNew,
        clickedOld:state.EditDataReducer.clickedOld,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ManageAd);

