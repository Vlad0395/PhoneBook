import React, { Component } from 'react'
import FormContact from './FormContact'
import { UpdateContact } from '../actions/ContactActions'

class EditContact extends Component {
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
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { first_name, last_name, company, birth_day, mobile, photo_contact, email } = this.state
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
                // ActionWithData={this.props.dispatch(UpdateContact(this.state))}
            />
        )
    }
}

export default EditContact