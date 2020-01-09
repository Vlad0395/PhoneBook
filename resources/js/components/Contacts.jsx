import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Styles from '../styles/StyleContact';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { getContacts } from '../actions/ContactActions';
import { getPhones } from '../actions/PhoneActions';
import DialogInfoAboutContact from './DialogInfoAboutContact';
import map from 'lodash/map';

class PrimarySearchAppBar extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
		open: true,
		dialogOpen: false,
		selectedContact: {},
		selectedContactKey: null,
		userPhone: null,
	};

	componentDidMount() {
		this.props.dispatch(getContacts());
		this.props.dispatch(getPhones());
	}

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
		console.log('MenuOpen', event);
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleDrawerShow = () => {
		this.setState({ open: !this.state.open });
	};

	handleDialogInfo = selectedContact => {
		this.setState({ dialogOpen: !this.state.dialogOpen, selectedContact });
	};
	render() {
		const { classes, contacts, phones } = this.props;
		console.log('phone', phones);
		const { anchorEl, mobileMoreAnchorEl, open, dialogOpen, selectedContact } = this.state;
		console.log('selectedContact', selectedContact);
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
		// const theme = useTheme();

		const menuId = 'primary-search-account-menu';
		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				id={menuId}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
			</Menu>
		);

		const mobileMenuId = 'primary-search-account-menu-mobile';
		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				id={mobileMenuId}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton aria-label="show 4 new mails" color="inherit">
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem>
					<IconButton aria-label="show 11 new notifications" color="inherit">
						<Badge badgeContent={11} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
					<IconButton
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		);
		return (
			<Grid className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={clsx(classes.appBar)}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerShow}
							edge="start"
							className={clsx(classes.menuButton, open)}
						>
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title} variant="h6" noWrap>
							Contacts
						</Typography>
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
						<Grid className={classes.grow} />
						<Grid className={classes.sectionDesktop}>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={this.handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</Grid>
						<Grid className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								onClick={this.handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</Grid>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Divider />
					{/* <List>
						<ListItem button key={}>
							<ListItemIcon>
								{' '}
								<AddIcon />{' '}
							</ListItemIcon>
							<Link to="/create">
								<ListItemText primary=" Create contact" />
							</Link>
						</ListItem>
					</List> */}
					<IconButton>
						<Grid container>
							<AddIcon />
							<Typography variant="h5">Create contact</Typography>
						</Grid>
					</IconButton>
					<Divider />
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<Grid className={classes.drawerHeader} />
					<Grid container className={classes.headerTable} spacing={2}>
						<Grid item xs={3}>
							<Typography>Name</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography>E-mail</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>Number phone</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>Company</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography>Other</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							Contacts
						</Grid>
						{contacts &&
							map(contacts, (contact, key) => (
								<Fragment key={contact.id}>
									<Grid item xs={3}>
										<Grid container alignItems="center" spacing={1}>
											<Grid item xs={2}>
												<Avatar
													alt="Remy Sharp"
													src={'./images/' + (contact.photo_contact || 'Contacts-icon.png')}
													className={classes.avatar}
												/>
											</Grid>
											<Grid item xs={10} onClick={() => this.handleDialogInfo(contact)}>
												{/* <Link className={classes.link} to={'personalcontact/' + contact.id}>
													{contact.first_name} {contact.last_name}
												</Link> */}
												{contact.first_name} {contact.last_name}
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={3}>
										<Typography>{contact.email}</Typography>
									</Grid>
									<Grid item xs={2}>
										{phones &&
											phones
												.filter(phone => phone.contact_id === contact.id)
												.map(item => <Typography key={item.id}>{item.number}</Typography>)}
									</Grid>
									<Grid item xs={2}>
										<Typography>{contact.company}</Typography>
									</Grid>
									<Grid item xs={1}>
										<Typography>1</Typography>
									</Grid>
									{dialogOpen && (
										<DialogInfoAboutContact
											open={dialogOpen}
											contact={selectedContact}
											contactKey={key}
											handleClose={this.handleDialogInfo}
										/>
									)}
								</Fragment>
							))}
					</Grid>
				</main>
				{renderMobileMenu}
				{renderMenu}
			</Grid>
		);
	}
}
const mapStateToProps = state => {
	const { contacts, error, phones } = state.ContactsReducer;
	return {
		contacts,
		error,
		phones,
	};
};

export default connect(mapStateToProps)(withStyles(Styles, { withTheme: true })(PrimarySearchAppBar));
