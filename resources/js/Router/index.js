import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "../components/Contacts";
import PersonalContact from "../components/PersonalContact";
import CreateContact from "../components/CreateContact";
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                < Switch>
                    <Route path='/'
                           exact component={Contacts}
                    />
                    <Route path='/personalcontact/:id'
                           component={PersonalContact}
                    />
                    <Route path='/create'
                           component={CreateContact}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
