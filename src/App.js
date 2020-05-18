import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    musicals: []
  }
  componentDidMount(){
    this.getMusicals()
  }

  getMusicals () {
    fetch('http://localhost:3000/musicals')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error))
  }
  render(){
  return (
    <div className="App">
      <h1>Welcome to the Theatre Tracker app!</h1>
    </div>
    );
  }
}

export default App;
