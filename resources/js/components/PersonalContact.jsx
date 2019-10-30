import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/CardContent'
// import Fab from '@material-ui/core/Fab';
// import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import BackCollIcon from '@material-ui/icons/ArrowBackIos';
import { getContact } from '../actions/ContactActions';
import Styles from '../styles/StylePersonalContact';
import { getPhone } from '../actions/PhoneActions';
// import Avatar from '@material-ui/core/Avatar';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import CardHeader from '@material-ui/core/CardHeader';
// import TextField from '@material-ui/core/TextField';
class PersonalContact extends Component {
	componentDidMount() {
		let url = window.location.href;
		let id = url.substring(url.lastIndexOf('/') + 1);

		if (!this.props.contacts) {
			this.props.dispatch(getContact(id));
		}
		this.props.dispatch(getPhone(id));
	}
	render() {
		const { contacts, classes, contact, phone } = this.props;
		let url = window.location.href;
		let id = url.substring(url.lastIndexOf('/') + 1);
		let a = contacts ? contacts.find(it => it.id === Number(id)) : contact ? contact : {};
		console.log('mobile', phone);
		return (
			<Grid container justify="center" spacing={1}>
				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardActionArea>
							<Grid container justify="space-between" spacing={1}>
								<Link to="/">
									<IconButton
										className={classes.button}
										aria-label="collBack"
										disabled
										color="primary"
									>
										<BackCollIcon />
									</IconButton>
								</Link>
								<Link to={'/edit/' + a.id}>
									<IconButton color="secondary" className={classes.button} aria-label="add an alarm">
										<EditIcon className={classes.btn} />
									</IconButton>
								</Link>
							</Grid>
						</CardActionArea>
						{/* <CardMedia className={classes.media} image={'/images/' + a.photo_contact} title="Paella dish" />
						<CardHeader title={a.first_name + ' ' + a.last_name} />
						<Typography className={classes.typography} component="div">Number:<br/> {phone && phone.number}</Typography>
						<Typography component="p">Company: {a.company}</Typography>
						<Typography component="p">E-mail: {a.email}</Typography> */}
					</Card>
				</Grid>
			</Grid>
		);
	}
}
const mapStateToProps = state => {
	const { contacts, error, contact, phone } = state.ContactsReducer;
	return {
		contact,
		contacts,
		error,
		phone,
	};
};
export default connect(mapStateToProps)(withStyles(Styles)(PersonalContact));
