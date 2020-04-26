import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";

class RegisterDialog extends Component {
    constructor() {
        super();
        this.state = {
            dialogOpen: false
        };
        this.handleClose = this.handleClose.bind(this);
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

    render() {
        return (
            <div>
                <Dialog
                    className="registerDialog"
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent>
                        <form className="" noValidate autoComplete="off">
                            <div className="registerNames">
                                <Input
                                    className="registerFirstName"
                                    placeholder="First name"
                                    inputProps={{ "aria-label": "description" }}
                                />
                                <Input
                                    className="registerLastName"
                                    placeholder="Last name"
                                    inputProps={{ "aria-label": "description" }}
                                />
                            </div>
                            <Input
                                className="registerEmail"
                                placeholder="Email"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                                className="registerPassword"
                                placeholder="Password"
                                type="password"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                                className="registerPasswordConf"
                                placeholder="ReEnter the password"
                                type="password"
                                inputProps={{ "aria-label": "description" }}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Register
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default RegisterDialog;
