import React, { Component } from 'react'
import { AddContact } from '../actions/ContactActions'
import { connect } from 'react-redux'
class CreateContact extends Component {
    state = {
        first_name: 'Vlad',
        last_name: 'Tymoshenko',
        mobile: '0994580747',
        company: 'OriginCompany',
        photo_contact: 'photo',
        email: 'vlad2009_@ukr.net',
        birth_day: '03.03.95'
    }
    
       
 
    render() {
        return (
            <div className="form-group card">
                <div className="row center">
                    <div className="col-md-2">
                        <button name='cancel'>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <p>Save Contact</p>
                    </div>
                    <div className="col-md-2">
                        <button name="send" onClick={() => {this.props.dispatch(AddContact(this.setState))}}>
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                </div>
                <input className="form-control" type="text" name='FirstName' placeholder="First name" />{this.state.first_name}
                <input className="form-control" type="text" name='LastName' placeholder="Last name" />{this.state.last_name}
                <input className="form-control" type="tel" name='Mobile' placeholder="Phone" maxLength='12' />{this.state.mobile}
                <input className="form-control" type="text" name='company' placeholder="Company" />{this.state.company}
                <input className="form-control" type="text" name='photo' placeholder="your photo" />{this.state.photo_contact}
                <input className="form-control" type="email" name='email' placeholder="e-mail" />{this.state.email}
                <input className="form-control" type="date" name='birthDay' placeholder="your birth day" />{this.state.birth_day}
            </div>
        );
    }
}

export default connect()(CreateContact)