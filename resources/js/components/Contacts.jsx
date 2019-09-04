import React, { Component, Fragment } from 'react'
import { getContacts, DeleteContact } from '../actions/ContactActions'
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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ITEM_HEIGHT = 48;
const options = [
    'Edit',
    'Delete',
];

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
    link: {
        color: '#000000',
        '&:hover': {
            color: '#000000',
            textDecoration: 'none',
        }
    }

});


class Contacts extends Component {
    state = {
        anchorEl: null,
        selectedId: null
    }

    componentDidMount() {
        this.props.dispatch(getContacts());
    }

    handleClick = (event, id) => {
        this.setState({ anchorEl: event.currentTarget, selectedId: id });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }
    // routeChange = () => {
    //     let path = '/create'
    //     this.props.history.push(path)
    // }
    render() {
        const { contacts, classes } = this.props
        const { anchorEl, selectedId } = this.state;

        const open = Boolean(anchorEl);

        return (
            <Grid className={classes.root}>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={3} >
                        <AppBar position="static">
                            <Toolbar>
                                <Grid className={classes.search}>
                                    <Grid className={classes.searchIcon}>
                                        <SearchIcon />
                                    </Grid>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Grid>
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
                                            onClick={(e) => this.handleClick(e, contact.id)}
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
                {open && <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 200,
                        },
                    }}
                >
                    {options.map(option => (
                        <MenuItem key={option} onClick={() => {
                            if (option === 'Delete') {
                                this.props.dispatch(DeleteContact(selectedId))
                            }
                            this.handleClose()
                        }}>
                            {option === 'Edit' ? <Link className={classes.link} to={'/edit/' + selectedId}>Edit</Link> : option}
                        </MenuItem>
                    ))}
                </Menu>
                }
                <Grid container justify="center" spacing={1}>
                    <Grid item sx={3}>
                        <Card className={classes.card} >
                            <Link to='/create'>
                                <IconButton>
                                    <AddContact />
                                </IconButton>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </Grid >


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
