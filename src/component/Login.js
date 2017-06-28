import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(){
    super();
    this.state={
      loginEmail:"",
      loginPassword:""
    }

    this.handleLogin=this.handleLogin.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.id]:event.target.value});
  }
  
  handleLogin(event){
    let userData={name:"Victor Bello"};
    this.props.onLogin(userData);
    this.props.history.push("/movies-list");
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input type="email" 
                      className="form-control" 
                      id="loginEmail" 
                      placeholder="Email"
                      value={this.state.loginEmail}
                      onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input type="password" 
                      className="form-control" 
                      id="loginPassword" 
                      placeholder="Password"
                      value={this.state.loginPassword}
                      onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>   
        </div>    
      </div>
    );
  }
}

export default withRouter(Login);
