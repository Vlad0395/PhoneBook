import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormContact from './FormContact';
import { AddContact } from '../actions/ContactActions'


class CreateContact extends Component {
    state = {
        first_name: '',
        last_name: '',
        mobile: '',
        company: '',
        photo_contact: '',
        email: '',
        birth_day: ''
    }

    handleChange = (event) => {
        console.log('event', event.target.name)

        if (event.target.name === 'photo_contact') {
            console.log('event_if', event.target.name)
            let files = event.target.files || event.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                photo_contact: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

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
                ActionWithData={() => { this.props.dispatch(AddContact(this.state)); console.log('this.state', this.state); this.props.history.push('/') }}
            />
        );
    }
}

export default connect()(CreateContact)
