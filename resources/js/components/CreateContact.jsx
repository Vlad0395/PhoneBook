import React, { Component } from 'react'
import { AddContact } from '../actions/ContactActions'
import { connect } from 'react-redux'
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
            <div className="form-group card">
                <div className="row center">
                    <div className="col-md-2">
                        <button name='cancel' onClick={()=>this.props.history.push('/')}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <p>Save Contact</p>
                    </div>
                    <div className="col-md-2">
                        <button name="send" onClick={() => this.props.dispatch(AddContact(this.state))}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                </div>
                <input className="form-control" type="text" name='first_name' placeholder="First name" onChange={this.handleChange} value={this.state.first_name} />
                <input className="form-control" type="text" name='last_name' placeholder="Last name" onChange={this.handleChange} value={this.state.last_name} />
                <input className="form-control" type="tel" name='mobile' placeholder="Phone" onChange={this.handleChange} maxLength='12' value={this.state.mobile} />
                <input className="form-control" type="text" name='company' placeholder="Company" onChange={this.handleChange} value={this.state.company} />
                <input className="form-control" type="text" name='photo_contact' placeholder="your photo" onChange={this.handleChange} value={this.state.photo_contact} />
                <input className="form-control" type="email" name='email' placeholder="e-mail" onChange={this.handleChange} value={this.state.email} />
                <input className="form-control" type="date" name='birth_day' onChange={this.handleChange} value={this.state.birth_day} />
            </div>
        );
    }
}

export default connect()(CreateContact)
