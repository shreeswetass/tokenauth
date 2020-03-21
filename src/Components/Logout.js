import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem('locatoken');
    }
    render() {
        return (
            <Fragment>
                <h1>Logout</h1>
                <Link to="/">Login Again!</Link>
            </Fragment>
        )
    }
}
