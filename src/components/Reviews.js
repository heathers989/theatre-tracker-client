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

  handleShowSelect = () => {
    // add additional shows as they're added to app
    if (this.state.currentMusical.name === "Moulin Rouge! The Musical"){
      console.log("we want to change the background")
      document.body.style.backgroundImage = "url('https://i0.wp.com/newyorktheater.me/wp-content/uploads/2019/07/Moulin-Rouge-set.jpg?fit=1951%2C1301&ssl=1')"
   } 
   else {
    document.body.style.backgroundImage = "url('https://cdn3.vectorstock.com/i/1000x1000/29/82/red-open-curtain-with-wood-floor-in-theater-velve-vector-21932982.jpg')"
   }
    }

    resetBackground = () => {
        document.body.style.backgroundImage = "url('https://cdn3.vectorstock.com/i/1000x1000/29/82/red-open-curtain-with-wood-floor-in-theater-velve-vector-21932982.jpg')"
    }

    render(){
        return (
            <>
            {/* {this.state.currentMusical.name === "Moulin Rouge! The Musical" ? document.body.style.backgroundImage = "url('https://i0.wp.com/newyorktheater.me/wp-content/uploads/2019/07/Moulin-Rouge-set.jpg?fit=1951%2C1301&ssl=1')"
: null} */}
            {this.handleShowSelect()}
            <div id="reviews_container">
           <h1>Reviews for {this.state.currentMusical.name}</h1>

           <table>
        <tbody key="tbody">
        <tr key="reviewheaders">
          <th>Review by:</th>
          <th>Date of performance:</th> 
          <th>Was most excited to see:</th> 
          <th>Understudies seen (if any):</th>
          <th>Rating from 1-5:</th>  
          <th>Cast members seen at stage door (if any):</th> 
          <th>Photos:</th> 
          <th>Comments:</th> 
         </tr> 
         {this.state.reviews.map(review => (
               <tr key={review.id}>
                   <td>{review.reviewer_name}</td>
                   <td>{review.date_of_show}</td>
                   <td>{review.cast_to_see}</td>
                   <td>{review.understudies_seen.map(understudy => (<div>{understudy}</div>))}</td>
                   <td>{review.rating}</td>
                   <td>{review.at_stagedoor.map(castMember => (<div>{castMember}</div>))}</td>
                   <td>{review.photos}</td>
                   <td id="comments">{review.comments}</td>

               </tr>

           ))}
    </tbody>
    </table>
           
          
            <Link to="/musicals">
            <button onClick={() => {this.props.toggleMusicals(); this.resetBackground()}}>Back to Musicals Index</button>
            </Link>
            </div>
            </>
        )
      }
    }

export default Reviews