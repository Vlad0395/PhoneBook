import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import ImagejCrop from './ImagejCrop'
import Grid from "@material-ui/core/Grid";

const Styles = theme => ({
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "fit-content"
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120
    },
    formControlLabel: {
        marginTop: theme.spacing(1)
    }
});

class MaxWidthDialog extends Component {
    state = {
        open: false,
        fullWidth: true,
        maxWidth: "sm"
    };

    handleClickOpen = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleMaxWidthChange = event => {
        this.setState({
            [event.target.value]: event.target.value
        });
    };

    handleFullWidthChange = event => {
        this.setState({
            [event.target.value]: event.target.value
        });
    };
    render() {
        const classes = this.props;
        const {
            fullWidth,
            maxWidth,
            open,
        } = this.state;
        return (
            <Grid>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    Open max-width dialog
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                        <form className={classes.form} noValidate>
                            <FormControl className={classes.formControl}>
                                <ImagejCrop/>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        );
    }
}

export default withStyles(Styles)(MaxWidthDialog);
