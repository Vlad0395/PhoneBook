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
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <p>Save Contact</p>
                    </div>
                    <div className="col-md-2">
                        <button name="send" onClick={() => this.props.dispatch(AddContact(this.setState))}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>
                </div>
                <input className="form-control" type="text" name='first_name' placeholder="First name" value={this.state.first_name} />
                <input className="form-control" type="text" name='last_name' placeholder="Last name" value={this.state.last_name} />
                <input className="form-control" type="tel" name='mobile' placeholder="Phone" maxLength='12' value={this.state.mobile} />
                <input className="form-control" type="text" name='company' placeholder="Company" value={this.state.company} />
                {/* <input className="form-control" type="text" name='photo' placeholder="your photo" value={this.state.photo_contact} /> */}
                <input className="form-control" type="email" name='email' placeholder="e-mail" value={this.state.email} />
                <input className="form-control" type="date" name='birthDay' placeholder="your birth day" value={this.state.birth_day} />
            </div>
        );
    }
}

export default connect()(CreateContact)