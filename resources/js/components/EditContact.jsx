import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormContact from './FormContact';
import { UpdateContact } from '../actions/ContactActions';

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
		const { first_name, last_name, company, birth_day, mobile, photo_contact, email, id } = this.state;

		return (
			<FormContact
				handleChange={this.handleChange}
				first_name={first_name}
				last_name={last_name}
				company={company}
				birth_day={birth_day}
				mobile={mobile}
				photo_contact={photo_contact}
				email={email}
				ActionWithData={() => {
					this.props.dispatch(UpdateContact(this.state, id));
					this.props.history.push('/');
				}}
			/>
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
export default connect(mapStateToProps)(EditContact);
