import React, { Component } from 'react'
import { AddContact } from '../actions/ContactActions'
import { connect } from 'react-redux'
import SaveContact from '@material-ui/icons/CheckCircleOutline';
import CancelContact from '@material-ui/icons/Cancel';
import { Grid } from '@material-ui/core';
import FormContact from './FormContact';


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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            // <div className="form-group card">
            //     <div className="row center">
            //         <div className="col-md-2">
            //             <button name='cancel' onClick={() => this.props.history.push('/')}>
            //                 <CancelContact />
            //             </button>
            //         </div>
            //         <div className="col-md-6">
            //             <p>Save Contact</p>
            //         </div>
            //         <div className="col-md-2">
            //             <button name="send" onClick={() => this.props.dispatch(AddContact(this.state))}>
            //                 <SaveContact />
            //             </button>
            //         </div>
            //     </div>
            //     <input className="form-control" type="text" name='first_name' placeholder="First name" onChange={this.handleChange} value={this.state.first_name} />
            //     <input className="form-control" type="text" name='last_name' placeholder="Last name" onChange={this.handleChange} value={this.state.last_name} />
            //     <input className="form-control" type="tel" name='mobile' placeholder="Phone" onChange={this.handleChange} maxLength='12' value={this.state.mobile} />
            //     <input className="form-control" type="text" name='company' placeholder="Company" onChange={this.handleChange} value={this.state.company} />
            //     <input className="form-control" type="text" name='photo_contact' placeholder="your photo" onChange={this.handleChange} value={this.state.photo_contact} />
            //     <input className="form-control" type="email" name='email' placeholder="e-mail" onChange={this.handleChange} value={this.state.email} />
            //     <input className="form-control" type="date" name='birth_day' onChange={this.handleChange} value={this.state.birth_day} />
            // </div>
            <FormContact
                handleChange={this.handleChange}
                first_name={this.state.first_name}
                last_name={this.state.last_name}
                company={this.state.company}
                birth_day={this.state.birth_day}
                mobile={this.state.mobile}
                photo_contact={this.state.photo_contact}
                email={this.state.email}
                ActionWithData={()=> this.props.dispatch(AddContact(this.state))}
            />
        );
    }
}

export default connect()(CreateContact)
