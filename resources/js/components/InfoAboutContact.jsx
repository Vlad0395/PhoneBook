import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Grid, IconButton, Avatar } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import withStyles from '@material-ui/core/styles/withStyles';
import Styles from '../styles/StyleContact';
import PhoneIcon from '@material-ui/icons/Phone';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class DialogInfoAboutContact extends Component {
	render() {
		const { open, handleClose, contact, contactKey, classes } = this.props;
		return (
			<div>
				<Dialog
					open={open}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleClose}
					fullWidth
					maxWidth="md"
					aria-labelledby="dialog-title"
					aria-describedby="dialog-description"
				>
					<DialogTitle id="dialog-title" className={classes.dialogTitle}>
						<Grid container spacing={2} key={contactKey} alignItems="center" justify="space-between">
							<Grid item xs={3}>
								<Avatar alt="Remy Sharp" src="\images\Contacts-icon.png" className={classes.large} />
							</Grid>
							<Grid item xs={7}>
								{contact.first_name} {contact.last_name}
							</Grid>
							<Grid item xs={2}>
								<Grid container spacing={2} direction="row" justify="flex-end">
									<IconButton aria-label="edit" className={classes.margin}>
										<EditIcon fontSize="small" />
									</IconButton>
									<IconButton aria-label="cancel" className={classes.margin} onClick={handleClose}>
										<CancelIcon fontSize="small" />
									</IconButton>
								</Grid>
							</Grid>
						</Grid>
					</DialogTitle>
					<DialogContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<h3>Data contact</h3>
							</Grid>
							<Grid item xs={2}>
								<PhoneIcon />
							</Grid>
							<Grid item xs={5}>
								<h5>{contact.phone_number}</h5>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>CONTENT</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(Styles)(DialogInfoAboutContact);