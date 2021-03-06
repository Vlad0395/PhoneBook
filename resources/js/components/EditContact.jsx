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
		number: '',
		company: '',
		photo_contact: '',
		email: '',
		birth_day: '',
		errorValidation: {},
	};

	handleChange = event => {
		let error = { ...this.state.errorValidation };
		let regular = '';

		switch (event.target.name) {
			case 'first_name':
				regular = RegExp('^[a-zA-Z0-9]{1,15}$');
				error[event.target.name] = 'Name must contain of latin letters and numbers';
				break;
			case 'last_name':
				regular = RegExp('^[a-zA-Z0-9]{1,15}$');
				error[event.target.name] = 'Surname must contain of latin letters and numbers';
				break;
			case 'email':
				regular = RegExp('^.+@.+..+');
				error[event.target.name] = 'email not valid';
				break;
			default:
				regular = '';
				break;
		}

		if (event.target.name === 'photo_contact') {
			let imgUrl = event.target.value;
			this.createImage(imgUrl);
		} else {
			this.setState({
				[event.target.name]: event.target.value,
			});
			if (event.target.value.match(regular)) {
				error[event.target.name] = '';
				this.setState({ errorValidation: error });
			} else {
				this.setState({ errorValidation: error });
			}
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
		const { contact, contacts } = this.props;
		// let phone = contact.phones.map(number => number.number);
		const editContact = contacts && contacts.find(it => it.id === contact.id);
		if (editContact) {
			this.setState({
				first_name: editContact.first_name,
				last_name: editContact.last_name,
				company: editContact.company,
				birth_day: editContact.birth_day,
				number: editContact.number,
				photo_contact: editContact.photo_contact,
				email: editContact.email,
				id: editContact.id,
			});
		}
	}

	render() {
		const { open, classes, contact } = this.props;
		return (
			<Grid>
				<Dialog
					fullWidth={Boolean(true)}
					maxWidth="md"
					open={open}
					onClose={this.props.handleClose}
					TransitionComponent={Transition}
				>
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
								disabled={
									!this.state.first_name ||
									!this.state.number ||
									!this.state.last_name ||
									!this.state.email ||
									!this.state.birth_day ||
									!this.state.company ||
									Boolean(this.state.errorValidation.first_name) ||
									Boolean(this.state.errorValidation.last_name) ||
									Boolean(this.state.errorValidation.email)
								}
							>
								update
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
							number={this.state.number}
							photo_contact={this.state.photo_contact}
							email={this.state.email}
							error={this.state.errorValidation}
							contact={contact}
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
