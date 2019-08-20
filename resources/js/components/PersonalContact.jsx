import React, { Component } from 'react'


class PersonalContact extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-8">First Name</div>
                    <div className="col-md-4">Photo</div>
                </div>
                <div className="row">
                    <div className="col-md-8">Last Name</div>
                </div>
                <div className="row">
                    <div className="col-md-12">Number</div>
                </div>
                <div className="row">
                    <div className="col-md-12">Company</div>
                </div>
                <div className="row">
                    <div className="col-md-12">e-mail</div>
                </div>
            </div>
        )
    }
}

export default PersonalContact