import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CancelContact from '@material-ui/icons/Cancel';
import SaveContact from '@material-ui/icons/CheckCircleOutline';
import FileUploadComponent from './FileUploadComponent';

const Styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    header: {
        justifyContent: 'space-beetwen',
    },
    link: {
        color: '#ffffff',
        textDecoration:'none',
    }

});


class FormContact extends Component {
    state = {
        expanded: false
    }
    render() {
        const { classes, first_name, last_name, company, birth_day, mobile, photo_contact, email, handleChange, ActionWithData } = this.props;
        const { expanded } = this.state;
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
                                    <Typography variant="h4" className={classes.title}>
                                        Save Contact
                                    </Typography>
                                    <IconButton className={classes.menuButton} color="inherit"
                                        onClick = {()=>ActionWithData()}
                                    >
                                        <SaveContact />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <FileUploadComponent/>
                    <input className="form-control" type="text" name='photo_contact' placeholder="your photo" onChange={handleChange} value={photo_contact} />
                    <input className="form-control" type="text" name='first_name' placeholder="First name" onChange={handleChange} value={first_name} />
                    <input className="form-control" type="text" name='last_name' placeholder="Last name" onChange={handleChange} value={last_name} />
                    <input className="form-control" type="tel" name='mobile' placeholder="Phone" onChange={handleChange} maxLength='12' value={mobile} />
                    <input className="form-control" type="text" name='company' placeholder="Company" onChange={handleChange} value={company} />
                    <input className="form-control" type="email" name='email' placeholder="e-mail" onChange={handleChange} value={email} />
                    <input className="form-control" type="date" name='birth_day' onChange={handleChange} value={birth_day} />
                </Grid >
            </Grid >


        );
    }
}

export default connect()(withStyles(Styles)(FormContact))
