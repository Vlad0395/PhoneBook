import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CancelContact from '@material-ui/icons/Cancel';
import SaveContact from '@material-ui/icons/CheckCircleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import Business from '@material-ui/icons/Business';
import Email from '@material-ui/icons/Email';
import Cake from '@material-ui/icons/Cake'
import Styles from '../styles/StyleFormContact';
import FormatedInput from './FormatedInput'

class FormContact extends Component {
    state = {
        expanded: false
    }

    render() {
        const { classes, first_name, last_name, company, birth_day, mobile, photo_contact, email, handleChange, ActionWithData } = this.props;
        const { expanded } = this.state;
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        return (
            <Grid container justify="center" spacing={1}>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={3} >
                        <Grid className={classes.root}>
                            <AppBar position="static">
                                <Toolbar className={classes.header}>
                                    <Link to="/">
                                        <IconButton className={classes.menuButton} color="inherit">
                                            <CancelContact className={classes.link} />
                                        </IconButton>
                                    </Link>
                                    <Typography variant="h6" className={classes.title}>
                                        {id >= 0 ? ' Edit Contact' : 'Create Contact'}
                                    </Typography>
                                    <IconButton className={classes.menuButton} color="inherit"
                                        onClick={() => ActionWithData()}
                                    >
                                        <SaveContact />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>

                    <Grid className={classes.margin}>
                        <Grid container spacing={1} >
                            <Grid item>
                                <TextField
                                    type="file"
                                    name='photo_contact'
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end" >
                            <Grid item xs={2} align="center">
                                <AccountCircle />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='first_name'
                                    label="First Name"
                                    onChange={handleChange}
                                    value={first_name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <AccountCircle />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='last_name'
                                    label="Last Name"
                                    onChange={handleChange}
                                    value={last_name}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <PhoneAndroid />
                            </Grid>
                            <Grid item xs={10}>
                                <FormatedInput
                                    name='mobile'
                                    mobile = {mobile}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Business />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='company'
                                    label="Company"
                                    onChange={handleChange}
                                    value={company} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Email />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    id="input-with-icon-grid"
                                    name='email'
                                    label="email"
                                    onChange={handleChange}
                                    value={email} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={2} align="center">
                                <Cake />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    fullWidth
                                    type='date'
                                    id="input-with-icon-grid"
                                    name='birth_day'
                                    onChange={handleChange}
                                    value={birth_day} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid >
            </Grid >


        );
    }
}

export default connect()(withStyles(Styles)(FormContact))
