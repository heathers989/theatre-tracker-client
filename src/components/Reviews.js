import React from 'react';
import { Link } from 'react-router-dom'


let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://theatre-tracker-api.herokuapp.com/'
}


class Reviews extends React.Component {
    // musicalId = (this.props.match.params.id);

    state = {
        currentMusical: {},
        reviews: []
    }

    componentDidMount(){
        this.getMusical()
    }

 getMusical () {
    fetch(`${baseURL}/musicals/${this.props.match.params.id}`)
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({currentMusical: json, reviews: json.reviews}),
    console.log("get musical is running"),
    err => console.log(err))
  }

    render(){
        console.log(this.state.currentMusical.reviews)
        return (
            <>
           <h1>Reviews for {this.state.currentMusical.name}</h1>
           
           {this.state.reviews.map(review => (
               <div key={review.id}>
                   <div>Review by: {review.reviewer_name}</div>
               </div>

           ))}
            <Link to="/musicals">
            <button onClick={() => this.props.toggleMusicals()}>Back to Musicals Index</button>
            </Link>
            </>
        )
      }
    }

export default Reviews