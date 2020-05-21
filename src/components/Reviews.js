import React from 'react';



let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://theatre-tracker-api.herokuapp.com/'
}


class Reviews extends React.Component {
    // musicalId = (this.props.match.params.id);

    state = {
        currentMusical: {}
    }

    componentDidMount(){
        this.getMusical()
    }

 getMusical () {
    fetch(`${baseURL}/musicals/${this.props.match.params.id}`)
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({currentMusical: json}),
    console.log("get musicals is running"),
    err => console.log(err))
  }

    render(){
        console.log(this.state.currentMusical)
        return (
            <>
           <h1>Reviews for {this.state.currentMusical.name}</h1>
           
            
            
            </>
        )
        }
    }

export default Reviews