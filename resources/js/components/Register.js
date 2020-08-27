import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';

class RegisterDialog extends Component {
    constructor() {
        super();
        this.state = {
            dialogOpen: false,
            progressResult:false,
            email:"",
            password:"",
            firstName:"",
            lastName:"",
            btnDisabled:false,
            passwordError:false
        };
        this.handleClose = this.handleClose.bind(this);
        this.submitRegister=this.submitRegister.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            dialogOpen: true
        });
    }

    handleClose() {
        this.setState({
            dialogOpen: false
        });
        this.props.history.goBack();
    }

    handleInputChange(e){
        if(e.target.name=="firstName"){
            this.setState({
                firstName:e.target.value
            })
        }
        else if(e.target.name=="lastName"){
            this.setState({
                lastName:e.target.value
            })
        }
        else if(e.target.name=="email"){
            this.setState({
                email:e.target.value
            })
        }
        else if(e.target.name=="password"){
            this.setState({
                password:e.target.value
            })
        }
        else if(e.target.name=="repassword"){
            var entered=this.state.password
            if(e.target.value!=entered){
                this.setState({
                    passwordError:true
                })
            }
            else{
                this.setState({
                    passwordError:false
                })
            }
        }
    }

    submitRegister(e){
        e.preventDefault();
        this.setState({
            progressResult:true,
            btnDisabled:true,
        })
        axios.post("/api/user/register",{
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password,
        })
        .then(res=>{
            this.setState({
                progressResult:false,
                btnDisabled:false
            })

            this.props.history.push("/login")
        })
        .catch(e=>{
            this.setState({
                progressResult:false,
                btnDisabled:false
            })
            console.log(e)
        })

    }


    render() {

        let progressBar=""

        let passwordError=false
        if(this.state.passwordError){
            passwordError=true
        }

        if(this.state.progressResult){
            progressBar=<LinearProgress />
        }

        return (
            <div>
                <Dialog
                    className="registerDialog"
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    {progressBar}
                    <DialogTitle id="alert-dialog-title">{"Register"}</DialogTitle>
                    <DialogContent>
                        <form className="" noValidate autoComplete="off">
                            <div className="registerNames">
                                <Input
                                    name="firstName"
                                    onChange={this.handleInputChange}
                                    className="registerFirstName"
                                    placeholder="First name"
                                    inputProps={{ "aria-label": "description" }}
                                />
                                <Input
                                    name="lastName"
                                    onChange={this.handleInputChange}
                                    className="registerLastName"
                                    placeholder="Last name"
                                    inputProps={{ "aria-label": "description" }}
                                />
                            </div>
                            <Input
                                name="email"
                                onChange={this.handleInputChange}
                                className="registerEmail"
                                placeholder="Email"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                                name="password"
                                onChange={this.handleInputChange}
                                className="registerPassword"
                                placeholder="Password"
                                type="password"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                                name="repassword"
                                className="registerPasswordConf"
                                error={passwordError}
                                placeholder="ReEnter the password"
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
                        <Button disabled={this.state.btnDisabled} onClick={this.submitRegister} color="primary">
                            Register
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default RegisterDialog;
