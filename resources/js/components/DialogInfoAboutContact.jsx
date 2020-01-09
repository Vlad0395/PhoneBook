import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Grid } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class DialogInfoAboutContact extends Component {
	// state = {
	//     open: false,
	// }

	// handleClickOpen = () => {
	//     this.setState({ open: true });
	// };

	// handleClose = () => {
	//     this.setState({ open: false });
	// };

	render() {
		// const { open } = this.state;
		const { open, handleClickOpen, handleClose, contact, contactKey } = this.props;
		console.log('contact', contact);
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={handleClickOpen}>
					Slide in alert dialog
				</Button>
				<Dialog
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
					<DialogContent>
						<Grid key={contactKey}>
							{contact.first_name} {contact.last_name}
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Disagree
						</Button>
						<Button onClick={handleClose} color="primary">
							Agree
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default DialogInfoAboutContact;
