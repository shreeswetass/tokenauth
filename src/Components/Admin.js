import React, { Component, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';

export default class Admin extends Component {
    constructor(props){
        super(props);
       
        const token = localStorage.getItem('locatoken');
        let isLoggedin = true;
        if(token == null)
        {
            debugger
            isLoggedin = false;
        }
        this.state = {
            isLoggedin
        }
    }
    
    render() {
        console.log("admin");
        console.log(this.state.isLoggedin);
        if(this.state.isLoggedin === false)
        {
            return <Redirect to="/" />
        }
        return (
            <Fragment>
                <h1>Admin</h1>
                <Link to="/logout">Logout</Link>
            </Fragment>
        )
    }
}
