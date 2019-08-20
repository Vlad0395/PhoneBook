import React, { Component } from 'react'


class PersonalContact extends Component {
    render() {
        return (
            <div className='container card'>
                <div className="row">
                    <div className="col-md-4 ml-md-left">First Name</div>
                    <div className="col-md-4 ml-md-left">Photo</div>
                </div>
                <div className="row">
                    <div className="col-md-4">Last Name</div>
                </div>
                <div className="row">
                    <div className="col-md-8 ">Number</div>
                </div>
                <div className="row">
                    <div className="col-md-8">Company</div>
                </div>
                <div className="row">
                    <div className="col-md-8">e-mail</div>
                </div>
            </div>
        )
    }
}

export default PersonalContact
