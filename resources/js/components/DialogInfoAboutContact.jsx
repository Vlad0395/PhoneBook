import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import withStyles from '@material-ui/core/styles/withStyles';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Grid, Avatar, IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Cancel from '@material-ui/icons/Cancel';
import Edit from '@material-ui/icons/Create';
import Delete from '@material-ui/icons/DeleteForever';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
	large: {
		width: theme.spacing(9),
		height: theme.spacing(9),
	},
	width: {
		width: 600,
		borderBottom: '1px solid black',
		marginBottom: '10px',
	},
	margin: {
		margin: theme.spacing(1),
		fontSize: 24,
	},
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
		const { open, handleClickOpen, handleClose, contact, contactKey, classes } = this.props;
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
					<DialogContent className={classes.width}>
						<Grid container spacing={2} key={contactKey} alignItems="center">
							{/* <Grid item xs={12}> */}
							<Grid item xs={2}>
								<Avatar
									alt="Remy Sharp"
									src={'images/' + contact.photo_contact}
									className={classes.large}
								/>
							</Grid>
							<Grid item xs={6}>
								{/* <TextField
										id="standard-read-only-input"
										label="Read Only"
										defaultValue={`${contact.first_name} ${contact.last_name}`}
										InputProps={{
											readOnly: true,
										}}
									/> */}
								<InputBase
									className={classes.margin}
									defaultValue={`${contact.first_name} ${contact.last_name}`}
									inputProps={{ 'aria-label': 'naked' }}
								/>
							</Grid>
							<Grid item xs={4} container justify="space-between">
								<IconButton className={classes.button} aria-label="edit">
									<Edit />
								</IconButton>
								<IconButton className={classes.button} aria-label="delete">
									<Delete />
								</IconButton>
								<IconButton className={classes.button} aria-label="cancel">
									<Cancel onClick={handleClose} />
								</IconButton>
							</Grid>
							{/* </Grid> */}
						</Grid>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(Styles)(DialogInfoAboutContact);
