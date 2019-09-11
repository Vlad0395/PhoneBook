import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import EditContact from '@material-ui/icons/Edit';
import BackAllContact from '@material-ui/icons/ReplyAll';

import withStyles from '@material-ui/core/styles/withStyles';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Styles = (theme) => ({
    card: {
        maxWidth: 345,
    },
})
class PersonalContact extends Component {

    render() {
        const { contacts } = this.props
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        let a = contacts.find(it => it.id == id);

        const classes = Styles();

        return (
            <Grid container justify="center" spacing={1}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="../images/myPhoto.jpg"
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <Paper>
                            <Typography component="p">
                                Name: {a.first_name} {a.Last_name}
                            </Typography>
                            <Typography component="p">
                                Number
                            </Typography>
                            <Typography component="p">
                               Company: {a.company}
                            </Typography>
                            <Typography component="p">
                                E-mail: {a.email}
                            </Typography>
                        </Paper>
                    </Card>
                </Grid>
            </Grid>
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
export default connect(mapStateToProps)(withStyles(Styles)(PersonalContact)) 