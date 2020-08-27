import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import LinearProgress from '@material-ui/core/LinearProgress';

import {connect} from "react-redux"

import axios from "axios"

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressResult:false,
            dialogOpen: false,
            email:"",
            password:"",
            loginError:false,
            btnDisabled:false
        };
        this.handleClose = this.handleClose.bind(this);
        this.submitLogin=this.submitLogin.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
    }

    componentDidMount() {

        if(this.props.user.access_token!=null){
            this.props.history.goBack()
        }
        else{
            this.setState({
                dialogOpen: true
            });
        }

    }

    submitLogin(e){
        e.preventDefault();
        this.setState({
            progressResult:true,
            btnDisabled:true
        })
        axios.post("/api/user/login",{
            email:this.state.email,
            password:this.state.password,
        })
        .then(res=>{

            this.setState({
                progressResult:false,
                btnDisabled:false
            })
            localStorage.setItem('first_name', res.data.first_name);
            localStorage.setItem('last_name', res.data.last_name);
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('user_id', res.data.id);
            this.props.addUser(res.data)
            this.props.history.push("/")
        })
        .catch(e=>{
            this.setState({
                loginError:true,
                btnDisabled:false
            })
            this.setState({
                progressResult:false
            })
            console.log(e)
        })

    }

    handleInputChange(e){
        if(e.target.name=="email"){
            this.setState({
                email:e.target.value
            })
        }
        else{
            this.setState({
                password:e.target.value
            })
        }
    }

    handleClose() {
        this.setState({
            dialogOpen: false
        });
        this.props.history.goBack()
    }

    render() {

        var loginError=false
        if(this.state.loginError){
            loginError=true
        }


        let progressBar=""
        if(this.state.progressResult){
            progressBar=<LinearProgress />
        }

        return (
            <div>
                <Dialog
                  className="loginDialog"
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {progressBar}
                    <DialogTitle id="alert-dialog-title">{"Hi there, Welcome Back!"}</DialogTitle>
                    <DialogContent>
                        <form
                            className=""
                            noValidate
                            autoComplete="off"
                        >
                            
                            <Input
                                className="loginEmail"
                                onChange={this.handleInputChange}
                                name="email"
                                error={loginError}
                                placeholder="Email"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                                name="password"
                                className="loginPassword"
                                error={loginError}
                                placeholder="Password"
                                onChange={this.handleInputChange}
                                type="password"
                                inputProps={{ "aria-label": "description" }}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={this.state.btnDisabled} onClick={this.submitLogin} color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.RootReducer.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addUser:(user)=>{
            dispatch({type:"ADD-USER",user:user})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginDialog);
