import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Admin from "./Components/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/admin" component={Admin} />
      </Switch>
      </header>
    </div>
  );
}

export default App;
