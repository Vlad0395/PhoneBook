import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Example from "../components/Example";
import PersonalContact from "../components/PersonalContact";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Example}/>
                    <Route path='/personalcontact' component={PersonalContact}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

export default Index
