import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import React from "react"

const dialog = (props) => {

    return (
        <Dialog
            open={props.open}
            onClose={() => { props.handleClose("close") }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete post</DialogTitle>
            <DialogContent>
               <p>Do you really want to delete this post?</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { props.handleClose("close") }} color="primary">
                    Disagree
          </Button>
                <Button onClick={() => { props.handleClose("agree") }} color="primary" autoFocus>
                    Agree
          </Button>
            </DialogActions>
        </Dialog>
    )

}

export default dialog;