import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PersonalContact extends Component {

    render() {
        const { contacts } = this.props
        console.log(contacts, 'check PersonalContact');
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        console.log(url, id)

        let a = contacts.find(it => it.id == id);
        console.log('a', a)
        return (

            <div className='container card'>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <Link to='/'> <i className="fas fa-arrow-circle-left"></i> All Contacts</Link>
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
                    <div className="col-md-12">e-mail</div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right"><i className="far fa-edit edit fa-2x"></i></div>
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