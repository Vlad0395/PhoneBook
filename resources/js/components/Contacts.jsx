import React, { Component, Fragment } from 'react'
import { getContacts } from '../actions/ContactActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddContact from '@material-ui/icons/Add';
import SearchContact from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class Contacts extends Component {
    componentDidMount() {
        this.props.dispatch(getContacts())
    }

    render() {


        const { contacts, classes } = this.props

        return (
            // <div className='card'>
            //     <form className="form-group search">
            //         <input className="form-control " type="search" placeholde="Search" name="Search" /><SearchContact className='searchContact' />
            //     </form>
            //     {contacts && contacts.map(contact =>
            //         <div className="row persContact align-items-center h-100">
            //             <div className="offset-md-2 col-md-2 photo">

            //             </div>
            //             <div className="col-md-8" key={contact.id} >
            //                 <Link to={/personalcontact/ + contact.id}>
            //                     <p >{contact.first_name} {contact.last_name}</p>
            //                 </Link>
            //             </div>

            //         </div>
            //     )}
            //     <div className="row ">
            //         <div className="col-md-12 text-right">
            //             <Link to='/create'>
            //                 <AddContact className />
            //             </Link>
            //         </div>
            //     </div>
            // </div>

            <div className={classes.root}>
                <Grid container justify="flex-end" spacing={1}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>xs 12</Paper>
                    </Grid>
                    <Grid item xs={2}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                </Grid>
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
export default connect(mapStateToProps)(withStyles(Styles)(Contacts)) 
