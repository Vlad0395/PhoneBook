import React, { Component } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Styles from '../styles/StyleContact';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

class PrimarySearchAppBar extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
		open: true,
	};
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

	render() {
		const { classes } = this.props;

		const { anchorEl, mobileMoreAnchorEl, open } = this.state;
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
					<List>
						<ListItem button key={100001}>
							<ListItemIcon>
								{' '}
								<AddIcon />{' '}
							</ListItemIcon>
							<Link to="/create">
								<ListItemText primary=" Create contact" />
							</Link>
						</ListItem>
					</List>
					<Divider />
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<Grid className={classes.drawerHeader} />
				</main>
				{renderMobileMenu}
				{renderMenu}
			</Grid>
		);
	}
}
const mapStateToProps = state => {
	const { contacts, error } = state.ContactsReducer;
	return {
		contacts,
		error,
	};
};

export default connect(mapStateToProps)(withStyles(Styles, { withTheme: true })(PrimarySearchAppBar));
