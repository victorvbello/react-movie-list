import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import {Login, MoviesList ,Error, Logout} from './component'


class App extends Component {
  constructor(){
    super();
    
    this.state={
      user:null,
      isLogin:false
    }
    
    this.handleIsLogin=this.handleIsLogin.bind(this);
    this.handleIsLogout=this.handleIsLogout.bind(this);
  }

  handleIsLogin(dataUser){
    this.setState({
      user:dataUser,
      isLogin:true
    });
  }

  handleIsLogout(){
    this.setState({
      user:null,
      isLogin:false
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">Lista de Peliculas</a>
              </div>
              {this.state.isLogin 
                &&
                <ul className="nav navbar-nav" >
                  <li><Link to="/movies-list">Lista de Pelicula</Link></li>
                </ul>                
              }
              {this.state.isLogin 
                &&
                <ul className="nav navbar-nav navbar-right">
                  <li><span className="navbar-brand" >Bienvenido {this.state.user.name}</span></li>
                  <li><Link to="/logout">Salir</Link></li>
                </ul>
              }
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" render={() => <Login onLogin={this.handleIsLogin}/>}/>
              <Route exact path="/movies-list" component={MoviesList}/>
              <Route exact path="/logout"render={() => <Logout onLogout={this.handleIsLogout}/>}/>
              <Route path="*" render={() => <Error errorCode="404"/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
