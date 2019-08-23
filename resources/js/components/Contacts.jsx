import React, { Component, Fragment } from 'react'
import { getContacts } from '../actions/ContactActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Contacts extends Component {
    componentDidMount() {
        this.props.dispatch(getContacts())
    }
    render() {
        const { contacts } = this.props
        console.log(contacts, "check Contact");

        // handleChange = (event) => {
        //     this.setState({
        //         [event.target.name]: event.target.value
        //     })
        // }

        return (
            <div className='card'>
                <form className="form">
                    <input type="text" placeholde="Search" name="Search" /><i className="fas fa-search "></i>
                </form>
                {contacts && contacts.map(contact =>
                    <div>
                        <Link to={/personalcontact/ + contact.id}>
                            <p key={contact.id}>{contact.first_name} {contact.last_name}</p>
                        </Link>
                    </div>
                )}
                <div className="row ">
                    <div className="col-md-12 text-right">
                    <i className="fas fa-plus-circle fa-2x"></i>
                    </div>
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
export default connect(mapStateToProps)(Contacts) 
