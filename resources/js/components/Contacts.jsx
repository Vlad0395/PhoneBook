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

        return (
            <div>
                {contacts && contacts.map(contact =>
                    <Fragment key={contact.id}>
                        <Link to={/personalcontact/+contact.id}>
                            <h1>{contact.first_name}</h1>
                            <h1>{contact.last_name}</h1>
                        </Link>
                    </Fragment>
                )}
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
