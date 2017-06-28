import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.props.onLogout();
    this.props.history.push("/");
  }
  
  render() {
    return (
      <div>
        <h1 className="text-center">Logout</h1>
      </div>
    );
  }
}

export default withRouter(Logout);
