import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Grid, IconButton, Avatar, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import withStyles from '@material-ui/core/styles/withStyles';
import Styles from '../styles/StyleContact';
import PhoneIcon from '@material-ui/icons/Phone';
import CakeIcon from '@material-ui/icons/Cake';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';

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
					maxWidth="sm"
					aria-labelledby="dialog-title"
					aria-describedby="dialog-description"
				>
					<DialogTitle id="dialog-title" className={classes.dialogTitle}>
						<Grid container spacing={2} key={contactKey} alignItems="center" justify="space-between">
							<Grid item xs={3}>
								<Avatar
									alt="Remy Sharp"
									src={
										contact.photo_contact
											? 'images/' + contact.photo_contact
											: 'images/Contacts-icon.png'
									}
									className={classes.large}
								/>
							</Grid>
							<Grid item xs={6}>
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
					<DialogContent className={classes.contentContact}>
						<Grid container spacing={2} className={classes.containerContent}>
							<Grid container spacing={2} className={classes.Grid}>
								<Grid item xs={12}>
									<Typography variant="h5">Data contact</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={2} alignItems="flex-end" className={classes.Grid}>
								<Grid item xs={1}>
									<PhoneIcon />
								</Grid>
								<Grid item xs={5}>
									{contact.phones &&
										contact.phones
											.filter(phone => phone.contact_id === contact.id)
											.map(item => <Typography key={item.id}>{item.number}</Typography>)}
								</Grid>
							</Grid>
							<Grid container spacing={2} className={classes.Grid}>
								<Grid item xs={1}>
									<EmailIcon />
								</Grid>
								<Grid item xs={5}>
									<Typography>{contact.email}</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={2} className={classes.Grid}>
								<Grid item xs={1}>
									<BusinessIcon />
								</Grid>
								<Grid item xs={5}>
									<Typography>{contact.company}</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={2} className={classes.Grid}>
								<Grid item xs={1}>
									<CakeIcon />
								</Grid>
								<Grid item xs={5}>
									<Typography>{contact.birth_day}</Typography>
								</Grid>
							</Grid>
						</Grid>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(Styles)(DialogInfoAboutContact);
