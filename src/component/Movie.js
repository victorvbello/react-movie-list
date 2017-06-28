import React,{Component} from 'react';

class Movie extends Component{
  constructor(){
    super()

    this.state={
      notification:null,
      showNotification:false,
      movieName:"",
      movieGender:""
    }

    this.handleChange=this.handleChange.bind(this);
    this.handleAddMovie=this.handleAddMovie.bind(this);
    this.handleNotification=this.handleNotification.bind(this);
  }
  
  handleChange(event){
    this.setState({[event.target.id]:event.target.value});
  }

  handleAddMovie(event){
    let movie={
      imdbId:Math.floor((Math.random() * 1000) + 1),
      title:this.state.movieName,
      gender:this.state.movieGender
    };
    this.setState({
      notification:{type:"success",message:"Pelicula Guardada"},
      showNotification:true
    });
    this.props.onAddMovie(movie);
    event.preventDefault();
  }

  handleNotification(){
    if(this.state.notification){
      let type=this.state.notification.type;
      let msg=this.state.notification.message;
      setTimeout(()=>{
        this.setState({
          showNotification:false
        })
      }, 1000);
      return(
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
          {msg}
        </div>
      );
    }
  }

  render(){
    return(
      <div className="row">
        {
          this.state.showNotification
            ? this.handleNotification()
            : null
        }
        <div className="col-xs-6 col-xs-offset-3">
          <h3>Nueva Pelicula</h3>
          <form onSubmit={this.handleAddMovie}>
            <div className="form-group">
              <label htmlFor="movieName">Nombre</label>
              <input type="text" 
                      className="form-control" 
                      id="movieName" 
                      placeholder="Nombre"
                      value={this.state.movieName}
                      onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="movieGender">Genero</label>
              <input type="text" 
                      className="form-control" 
                      id="movieGender" 
                      placeholder="Genero"
                      value={this.state.movieGender}
                      onChange={this.handleChange}/>
            </div>
            <div className="row">
              <div className="col-xs-12 text-right">
                <button type="submit" className="btn btn-success">Guardar</button>
              </div>            
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Movie;