import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Example from "../components/Example";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Example}/>
                    <Route path='/ex' component={Example}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

export default Index
