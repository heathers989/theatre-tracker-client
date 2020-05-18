import React from 'react';
import './App.css';
import Musicals from './components/Musicals.js'

let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://theatre-tracker-api.herokuapp.com/'
}

class App extends React.Component {
  state = {
    musicals: []
  }
  componentDidMount(){
    this.getMusicals()
  }

  getMusicals () {
    fetch(`${baseURL}/musicals`)
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({musicals: json}),
    console.log("get musicals is running"),
    err => console.log(err))
  }
  render(){
  return (
    <div className="App">
      <h1>Welcome to the Theatre Tracker app!</h1>
      <Musicals musicals={this.state.musicals}/>
    </div>
    );
  }
}

export default App;
