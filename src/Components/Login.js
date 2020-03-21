import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem('locatoken');
        let isLoggedin = true;
        if(token == null)
        {
            isLoggedin = false;
        }
        this.state={
            username : '',
            password : '',
            isLoggedin
        };
        this.changeInput = this.changeInput.bind(this);
        this.submitform = this.submitform.bind(this);
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitform = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    if (username === "sristi016@gmail.com" && password === "qwerty")
    {
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem('locatoken' , 'gfyfjgkhlkhjvhhhgh');
        }
       
      this.setState({
    isLoggedin : true
          })
    }
    }
    render() {
        console.log(this.state.isLoggedin);
        if(this.state.isLoggedin)
        {
           return <Redirect to="/admin"/>
        }
        return (
            <Fragment>
                <h1>Login</h1>
                <form onSubmit={this.submitform}>
<input type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.changeInput} />
<br/>
<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeInput} />
<br/>
<input type="submit" value="Submit" />
                </form>
            </Fragment>
        )
    }
}
