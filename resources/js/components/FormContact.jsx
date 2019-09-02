import React, { Component } from 'react'
import { connect } from 'react-redux'
import SaveContact from '@material-ui/icons/CheckCircleOutline';
import CancelContact from '@material-ui/icons/Cancel';


class FormContact extends Component {

    render() {
        const { first_name, last_name, company, birth_day, mobile, photo_contact, email, handleChange, ActionWithData} = this.props;
        return (
            <div className="form-group card">
                <div className="row center">
                    <div className="col-md-2">
                        <button name='cancel' onClick={() => this.props.history.push('/')}>
                            <CancelContact />
                        </button>
                    </div>
                    <div className="col-md-6">
                        <p>Save Contact</p>
                    </div>
                    <div className="col-md-2">
                        <button name="send" onClick={() => ActionWithData()}>
                            <SaveContact />
                        </button>
                    </div>
                </div>
                <input className="form-control" type="text" name='first_name' placeholder="First name" onChange={handleChange} value={first_name} />
                <input className="form-control" type="text" name='last_name' placeholder="Last name" onChange={handleChange} value={last_name} />
                <input className="form-control" type="tel" name='mobile' placeholder="Phone" onChange={handleChange} maxLength='12' value={mobile} />
                <input className="form-control" type="text" name='company' placeholder="Company" onChange={handleChange} value={company} />
                <input className="form-control" type="text" name='photo_contact' placeholder="your photo" onChange={handleChange} value={photo_contact} />
                <input className="form-control" type="email" name='email' placeholder="e-mail" onChange={handleChange} value={email} />
                <input className="form-control" type="date" name='birth_day' onChange={handleChange} value={birth_day} />
            </div>
        );
    }
}

export default connect()(FormContact)
