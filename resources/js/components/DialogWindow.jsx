import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const Styles = (theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
});

class MaxWidthDialog extends Component() {
    render() {
        const {classes} = this.props;
        state = {
            open: false,
            setOpen: false,
            fullWidth: true,
            setFullWidth: true,
            maxWidth: 'sm',
            setMaxWidth: 'sm',
        }

        handleClickOpen = () => {
            setOpen(true);
        };

        handleClose = () => {
            setOpen(false);
        };

        handleMaxWidthChange = event => {
            setMaxWidth(event.target.value);
        };

        handleFullWidthChange = event => {
            setFullWidth(event.target.checked);
        };
        return (

            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open max-width dialog
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                    </DialogContentText>
                        <form className={classes.form} noValidate>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                <Select
                                    value={maxWidth}
                                    onChange={handleMaxWidthChange}
                                    inputProps={{
                                        name: 'max-width',
                                        id: 'max-width',
                                    }}
                                >
                                    <MenuItem value={false}>false</MenuItem>
                                    <MenuItem value="xs">xs</MenuItem>
                                    <MenuItem value="sm">sm</MenuItem>
                                    <MenuItem value="md">md</MenuItem>
                                    <MenuItem value="lg">lg</MenuItem>
                                    <MenuItem value="xl">xl</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                className={classes.formControlLabel}
                                control={
                                    <Switch checked={fullWidth} onChange={handleFullWidthChange} value="fullWidth" />
                                }
                                label="Full width"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default (withStyles(Styles)(MaxWidthDialog))