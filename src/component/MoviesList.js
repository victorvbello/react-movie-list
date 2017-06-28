import React,{Component} from 'react';
import {Movie} from './'; 

class MoviesList extends Component{
  constructor(){
    super();

    this.state={
      movies:[],
      temMovies:[]
    }

    this.handleAddMovie=this.handleAddMovie.bind(this);
    this.handleRemoveMovie=this.handleRemoveMovie.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }

  componentWillMount(){
    fetch("https://raw.githubusercontent.com/bantic/imdb-data-scraping/master/data/movies.json",{
      method: 'GET'
    })
    .then(res =>res.json())
    .then((movies) => {
      this.setState({ movies: Object.values(movies) });
      this.setState({ temMovies: Object.values(movies) });
    })
  }

  handleAddMovie(movie){
    this.setState({
      movies:this.state.movies.concat(movie)
    })
  }

  handleRemoveMovie(event){
    let index=event.target.id.replace("movie-item-","");
    let updateListMovies=this.state.movies;
    updateListMovies.splice(index,1);
    this.setState({
      movies:updateListMovies
    });
  }

  handleSearch(event){
    let search=this.state.temMovies.filter((movie)=>{
      return movie.title.toLowerCase().search(event.target.value)!=-1
    });
    this.setState({
      movies:search
    });
  }

  render(){
    return(
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Movie onAddMovie={this.handleAddMovie}/>
          <div className="row">
            <h3>Lista de Peliculas</h3>
              <div className="form-group">
                <div className="input-group col-xs-12">
                  <input type="text" 
                    id="searchText" 
                    className="form-control" 
                    placeholder="Buscar ..." 
                    onChange={this.handleSearch}/>
                </div>
              </div>
          </div>
            {
              this.state.movies.length>0 &&
              <div className="row">
                <div className="panel-group">
                  {
                    this.state.movies.map((movie,index)=>{
                      return(
                        <div className="panel panel-default" key={movie.imdbId}>
                          <div className="panel-heading">
                            <div className="row">
                              <div className="col-xs-11">
                                <h6 className="panel-title">{movie.title}</h6>
                              </div>
                              <div className="col-xs-1 text-right">
                                <span className="btn btn-danger" onClick={this.handleRemoveMovie} id={`movie-item-${index}`}>&times;</span>
                              </div>
                            </div>                         
                          </div>
                          <div className="panel-body">
                              <ul className="list-group">
                              <li className="list-group-item"><b>Artista:</b></li>
                              <li className="list-group-item"><b>Genero:</b></li>
                              <li className="list-group-item"><b>Fecha:</b></li>
                            </ul>                           
                          </div>
                        </div>
                      );
                    }).reverse()
                  }
                </div>
              </div>
            }
        </div>
      </div>
    );
  }
}

export default MoviesList;