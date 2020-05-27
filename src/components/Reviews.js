import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'


let baseURL = process.env.REACT_APP_BASEURL


// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'https://theatre-tracker-api.herokuapp.com'
// }


class Reviews extends React.Component {


    state = {
        currentMusical: {},
        reviews: []
    }

    componentDidMount(){
        this.getMusical()
    }

    // handleDelete = (deletedReview, id) => {
    //   fetch(`${baseURL}/musicals/${id}/reviews/${deletedReview.id}`, {
    //     method: "DELETE",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((json) => {
    //       const reviews = this.state.reviews.filter(
    //         (review) => review.id !== deletedReview.id
    //       );
    //       this.setState({ reviews });
    //     })
    //     .catch((error) => console.log(error));
    // };

    // handleUpdate = (event, id, formInputs) => {
    //   event.preventDefault()
    //   console.log('in it to win it')
    //   fetch(`${baseURL}musicals/${id}/reviews/${formInputs.id}`, {
    //     body: JSON.stringify(
    //       {show_seen: reviewInfo.show_seen,
    //          cast_to_see: reviewInfo.cast_to_see,
    //          date_of_show: reviewInfo.date_of_show,
    //          if_understudies: reviewInfo.if_understudies,
    //          understudies_seen: "," + reviewInfo.understudies_seen + ",",
    //          rating: reviewInfo.rating,
    //          if_stagedoor: reviewInfo.if_stagedoor,
    //          at_stagedoor: "," + reviewInfo.at_stagedoor + ",",
    //          photos: reviewInfo.photos,
    //          comments: reviewInfo.comments,
    //          reviewer_name: reviewInfo.reviewer_name
    //       }),
    //     method: 'PUT',
    //     headers: {
    //    'Accept': 'application/json, text/plain, */*',
    //    'Content-Type': 'application/json'
    //  }
    // })
    //  .then(updatedReview => {
    //    // go wild
    //    this.getMusical()
    //  })
    //  .catch(error => console.log(error))
    // }

 getMusical () {
    fetch(`${baseURL}/musicals/${this.props.match.params.id}`)
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({currentMusical: json, reviews: json.reviews}),
    console.log("get musical is running", this.props),
    err => console.log(err))
  }

  handleShowSelect = () => {
    // add additional shows as they're added to app
    if (this.state.currentMusical.name === "Moulin Rouge! The Musical"){
      document.body.style.backgroundImage = "url('https://i0.wp.com/newyorktheater.me/wp-content/uploads/2019/07/Moulin-Rouge-set.jpg?fit=1951%2C1301&ssl=1')"
   } else if (this.state.currentMusical.name === "Waitress"){
    // console.log("we want to change the background")
    document.body.style.backgroundImage = "url('/img/waitress_backdrop.png')"
 }else if (this.state.currentMusical.name === "Pretty Woman the Musical") {
    document.body.style.backgroundImage = "url('/img/pretty_woman_backdrop.png')"
 } else {
    document.body.style.backgroundImage = "url('/img/backdrop.jpg')"
   }
    }

    resetBackground = () => {
        // document.body.style.backgroundImage = "url('http://followtheart.info/dld.php?w=2560&h=1440&img=https://cdn.wallpapersafari.com/85/16/pLEhwO.jpg')"
        document.body.style.backgroundImage = "url('/img/backdrop.jpg')"
    }

    render(){
        console.log(this.state.currentMusical)
        return (
            <>
            
            {this.handleShowSelect()}
            <div id="reviews_container">
            <Link to="/">
            <button onClick={() => {this.props.toggleMusicals(); this.resetBackground()}}>Back to Musicals Index</button>
            </Link>
           <h2>Reviews for {this.state.currentMusical.name}</h2>
            <h2>{this.state.currentMusical.theater}</h2>

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
          {/* <th>Delete:</th> */}
         </tr> 
         {this.state.reviews.map(review => (
               <tr key={review.id}>
                   <td>{review.reviewer_name}</td>
                   <td>{moment(review.date_of_show).format('MM-DD-YYYY')}</td>
                   <td>{review.cast_to_see}</td>
                   <td>{review.understudies_seen.map(understudy => (<div key={understudy}>{understudy}</div>))}</td>
                   <td>{review.rating} out of 5</td>
                   <td>{review.at_stagedoor.map(castMember => (<div key={castMember}>{castMember}</div>))}</td>
                   <td> {review.photos ? <a href={review.photos} target="_blank" rel="noopener noreferrer"><img id="reviewphoto" src={review.photos} alt="Moulin Rouge review"/></a> : null}</td>
                   <td id="comments">{review.comments}</td>
                   {/* <td><button onClick={() => this.handleUpdate(review, this.state.currentMusical.id)}>Edit</button></td>
                   <td><button onClick={() => this.handleDelete(review, this.state.currentMusical.id)}>Delete</button></td> */}

               </tr>

           ))}
    </tbody>
    </table>
            </div>
            </>
        )
      }
    }

export default Reviews