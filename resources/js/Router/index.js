import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contacts from "../components/Contacts";
import PersonalContact from "../components/PersonalContact";

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
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
