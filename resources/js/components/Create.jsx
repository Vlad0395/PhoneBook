import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { AddContact } from '../actions/ContactActions';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import PhoneIcon from '@material-ui/icons/Phone';
import FormatedInput from './FormatedInput';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="right" ref={ref} {...props} />;
});

const Styles = theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	input: {
		display: 'none',
	},
	// phone:{
	//     padding:'10px',
	// }
});

class CreateContact extends Component {
	state = {
		first_name: '',
		last_name: '',
		mobile: '',
		company: '',
		photo_contact: '',
		email: '',
		birth_day: '',
	};

	handleChange = event => {
		if (event.target.name === 'photo_contact') {
			let imgUrl = event.target.value;
			this.createImage(imgUrl);
		} else {
			this.setState({
				[event.target.name]: event.target.value,
			});
		}
	};

	createImage = blob => {
		let reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => {
			this.setState({
				photo_contact: reader.result,
			});
		};
	};

	render() {
		const { open, handleClose, classes } = this.props;

		return (
			<Grid>
				<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Create Contact
							</Typography>
							<Button autoFocus color="inherit" onClick={handleClose}>
								save
							</Button>
						</Toolbar>
					</AppBar>
					<DialogContent>
						<Grid container spacing={2} alignItems="center" justify="center">
							<Grid item md={6}>
								<Grid container spacing={2} alignItems="center" justify="center" direction="row">
									<Grid item xs={1}>
										<input
											accept="image/*"
											className={classes.input}
											id="icon-button-file"
											type="file"
										/>
										<label htmlFor="icon-button-file">
											<IconButton color="primary" aria-label="upload picture" component="span">
												<PhotoCamera />
											</IconButton>
										</label>
									</Grid>
									<Grid item xs={3}>
										<TextField
											id="first_name"
											label="Your Name"
											name="first_name"
											onChange={this.handleChange}
										/>
									</Grid>
									<Grid item xs={3}>
										<TextField
											id="last_name"
											label="Your Surname"
											name="last_name"
											onChange={this.handleChange}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid container spacing={2} alignItems="center" justify="center">
							<Grid item md={6}>
								<Grid container spacing={2} alignItems="center" justify="center" direction="row">
									<Grid item xs={1}>
										<PhoneIcon className={classes.phone} />
									</Grid>
									<Grid item xs={6}>
										<FormatedInput
											name="mobile"
											mobile={this.state.mobile}
											onChange={this.handleChange}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</DialogContent>
				</Dialog>
			</Grid>
		);
	}
}

export default connect()(withStyles(Styles)(CreateContact));
