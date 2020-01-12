import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UpdateContact } from '../actions/ContactActions';
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
import FormEdit from './FormCreateEditContact';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const Styles = theme => ({
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
});

class EditContact extends Component {
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

	componentDidMount() {
		const { contacts } = this.props;

		let url = window.location.href;
		let id = url.substring(url.lastIndexOf('/') + 1);
		const contact = contacts && contacts.find(it => it.id === id);
		if (contact) {
			this.setState({
				first_name: contact.first_name,
				last_name: contact.last_name,
				company: contact.company,
				birth_day: contact.birth_day,
				mobile: contact.mobile,
				photo_contact: contact.photo_contact,
				email: contact.email,
				id: contact.id,
			});
		}
	}

	render() {
		const { open, classes } = this.props;
		return (
			<Grid>
				<Dialog fullScreen open={open} onClose={this.props.handleClose} TransitionComponent={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								edge="start"
								color="inherit"
								onClick={this.props.handleClose}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								Edit Contact
							</Typography>
							<Button
								autoFocus
								color="inherit"
								onClick={() => {
									this.props.dispatch(UpdateContact(this.state, this.state.id));
									this.props.handleClose();
								}}
							>
								save
							</Button>
						</Toolbar>
					</AppBar>
					<DialogContent>
						<FormEdit
							handleChange={this.handleChange}
							first_name={this.state.first_name}
							last_name={this.state.last_name}
							company={this.state.company}
							birth_day={this.state.birth_day}
							mobile={this.state.mobile}
							photo_contact={this.state.photo_contact}
							email={this.state.email}
						/>
					</DialogContent>
				</Dialog>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	const { contacts, error } = state.ContactsReducer;
	return {
		contacts,
		error,
	};
};

export default connect(mapStateToProps)(withStyles(Styles)(EditContact));
