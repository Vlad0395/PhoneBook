import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Example from "../components/Example";
import Example2 from "../components/Example2";
class Router extends Component {
    render() {
        return ( < BrowserRouter >
            <
            Switch >
            <
            Route path = '/'
            exact component = { Example }
            /> <
            Route path = '/ex'
            component = { Example2 }
            /> <
            /Switch> <
            /BrowserRouter>
        )
    }
}

export default Router;