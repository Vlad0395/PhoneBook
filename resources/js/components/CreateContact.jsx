import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormContact from './FormContact';
import { AddContact } from '../actions/ContactActions';

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
		return (
			<FormContact
				handleChange={this.handleChange}
				first_name={this.state.first_name}
				last_name={this.state.last_name}
				company={this.state.company}
				birth_day={this.state.birth_day}
				mobile={this.state.mobile}
				photo_contact={this.state.photo_contact}
				email={this.state.email}
				ActionWithData={() => {
					this.props.dispatch(AddContact(this.state));
					this.props.history.push('/');
				}}
			/>
		);
	}
}

export default connect()(CreateContact);
