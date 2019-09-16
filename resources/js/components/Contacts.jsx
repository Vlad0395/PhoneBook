import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContacts, DeleteContact } from '../actions/ContactActions'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import Styles from '../styles/StyleContact';

const ITEM_HEIGHT = 48;
const options = [
    'Edit',
    'Delete',
];

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
                                        <Avatar alt="Remy Sharp" src="./images/Contacts-icon.png" className={classes.avatar} />
                                    }
                                    action={
                                        <IconButton
                                            className={classes.iconBut}
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={(e) => this.handleClick(e, contact.id)}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={<Link className={classes.link} to={'personalcontact/' + contact.id}>{contact.first_name} {contact.last_name}</Link>}
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


                        <Link to='/create'>
                            <Fab color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Link>
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
