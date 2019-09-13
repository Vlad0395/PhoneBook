import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import BackCollIcon from '@material-ui/icons/ArrowBackIos';
import { getContact } from '../actions/ContactActions';

const Styles = (theme) => ({
    card: {
        maxWidth: 345,
    },
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    link: {
        color: '#ffffff',
        '&:hover': {
            color: '#ffffff',
            textDecoration: 'none',
        }
    },
})
class PersonalContact extends Component {

    componentDidMount() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        // debugger;
        console.log(id, 'id')
        if (!this.props.contacts) {

            this.props.dispatch(getContact(id))
        }
    }
    render() {
        const { contacts, classes, contact } = this.props
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        let a = contacts ? contacts.find(it => it.id == id) : contact ? contact : {};

        return (
            <Grid container justify="center" spacing={1}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Link to='/'>
                                <IconButton className={classes.button} aria-label="delete" disabled color="primary">
                                    <BackCollIcon />
                                </IconButton>
                            </Link>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image="../images/myPhoto.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography component="p">
                                    Name: {a.first_name} {a.last_name}
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
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Fab color="secondary" aria-label="edit" className={classes.fab}>
                                <Link className={classes.link} to={'/edit/' + a.id}> <EditIcon /></Link>
                            </Fab>
                        </CardActions>
                    </Card>

                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => {
    const { contacts, error, contact } = state.ContactsReducer;
    return {
        contact,
        contacts,
        error
    }
}
export default connect(mapStateToProps)(withStyles(Styles)(PersonalContact)) 