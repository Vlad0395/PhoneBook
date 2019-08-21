import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PersonalContact extends Component {
    render() {
        return (
            <div className='container card'>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <Link to='/'> <i class="fas fa-arrow-circle-left"></i> All Contacts</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">Photo</div>
                </div>
                <div className="row">
                    <div className="col-md-12">First Name</div>
                </div>
                <div className="row">
                    <div className="col-md-12">Last Name</div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">Number</div>
                </div>
                <div className="row">
                    <div className="col-md-12">Company</div>
                </div>
                <div className="row">
                    <div className="col-md-12">e-mail</div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right"><i class="far fa-edit edit"></i></div>
                </div>
            </div>
        )
    }
}

export default PersonalContact
