import React from 'react'
import Album from './components/Album'
import SearchAppBar from './components/SearchAppBar'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        movies:[{
          Title:"",
          Year:"",
          imdbID:"",
          Type:"",
          Poster:""
        }]
    }

    this.inputMovieTitles = this.inputMovieTitles.bind(this)
  }

  

  inputMovieTitles(event){
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
    fetch(`http://www.omdbapi.com/?apikey=4ea7876b&s=${value}`)
      .then( response => response.json())
      .then( data => 
        this.setState({
          movies:data.Search
        })
        )
  }

  render(){
    return (
      <div>
        <SearchAppBar inputHandling={this.inputMovieTitles} value={this.state.movieTitle} name="movieTitle" />
        <Album data={this.state.movies}/>
      </div>
    );
  }
}

export default App;
