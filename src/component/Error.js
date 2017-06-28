import React,{Component} from 'react';

class Error extends Component{
  constructor(props){
    super(props);

    this.state={
      errorCode:this.props.errorCode
    }

    this.textError=this.textError.bind(this)
  }

  textError(){
    let txt="";
    switch(this.state.errorCode){
      case'404':
        txt="404 Not Forund";
      break;
      default:
        txt="Error";
      break;
    }
    return txt;
  }

  render(){
    return(
      <div>
        <h1 className="text-center">
          {this.textError()}
        </h1>
      </div>
    );
  }
}


export default Error;