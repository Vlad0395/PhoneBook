import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import EditContact from '@material-ui/icons/Edit';
import BackAllContact from '@material-ui/icons/ReplyAll';

class PersonalContact extends Component {

    render() {
        const { contacts } = this.props
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        let a = contacts.find(it => it.id == id);

        return (

            <div className='container card'>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <Link to='/'><BackAllContact />All Contacts</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">Photo</div>
                </div>
                <div className="row">
                    <div className="col-md-12">{a.first_name}</div>
                </div>
                <div className="row">
                    <div className="col-md-12">{a.last_name}</div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">Number</div>
                </div>
                <div className="row">
                    <div className="col-md-12">{a.company}</div>
                </div>
                <div className="row">
                    <div className="col-md-12">{a.email}</div>
                </div>
                <div className="row text-right">
                    <Link to='/edit'>
                        <EditContact />
                    </Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { contacts, error } = state.ContactsReducer;
    return {
        contacts,
        error
    }
}
export default connect(mapStateToProps)(PersonalContact) 