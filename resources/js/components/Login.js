import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";

class LoginDialog extends Component {
    constructor() {
        super();
        this.state = {
            dialogOpen: false
        };
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
      console.log(this.props)
        this.setState({
            dialogOpen: true
        });
    }

    handleClose() {
        this.setState({
            dialogOpen: false
        });
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <Dialog
                  className="loginDialog"
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent>
                        <form
                            className=""
                            noValidate
                            autoComplete="off"
                        >
                            <Input
                                className="loginEmail"
                                placeholder="Email"
                                inputProps={{ "aria-label": "description" }}
                            />
                            <Input
                              className="loginPassword"
                                placeholder="Password"
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
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default LoginDialog;
