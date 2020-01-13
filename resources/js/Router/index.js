import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacts from '../components/Contacts';
import PersonalContact from '../components/PersonalContact';
import CreateContact from '../components/CreateContact';
import EditContact from '../components/EditContact';
import ImagejCrop from '../components/ImagejCrop';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Contacts} />
					<Route path="/personalcontact/:id" component={PersonalContact} />
					<Route path="/create" component={CreateContact} />
					<Route path="/edit/:id" component={EditContact} />
					<Route path="/jCrop" component={ImagejCrop} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
