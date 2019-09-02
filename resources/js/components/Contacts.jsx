import React, { Component, Fragment } from 'react'
import { getContacts } from '../actions/ContactActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddContact from '@material-ui/icons/Add';
import SearchContact from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 250,
            },
        },
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
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={3} >
                        <AppBar position="static">
                            <Toolbar>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={3}>
                        {contacts && contacts.map(contact =>
                            <Card className={classes.card} key={contact.id}>
                                {/* <Link className="link" to={/personalcontact/ + contact.id}> */}
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                    </Avatar>
                                    }
                                    action={
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={`${contact.first_name} ${contact.last_name}`}
                                />
                                {/* </Link> */}
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </div >


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
