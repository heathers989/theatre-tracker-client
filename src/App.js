import React from 'react';
import './App.css';
import Musicals from './components/Musicals.js'
import Form from './components/Form.js'
import Reviews from './components/Reviews.js'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router";
// import backdrop from "./backdrop.jpg"


let baseURL = process.env.REACT_APP_BASEURL


// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'https://theatre-tracker-api.herokuapp.com'
// }

class App extends React.Component {
  state = {
    musicals: [],
    showMusicalsActive: true
  }

  showMusicals = (musical) => {

    this.setState({musical, 
      showMusicalsActive: !this.state.showMusicalsActive
      // , getEditUserActive: false
    }) 
  }

  toggleMusicals = () => {
    //hides musicals index component
    let toHide = document.getElementById("musicals_container")
    let toShow = document.getElementById("hide")
   if (toHide) {
      toHide.setAttribute("id", "hide")
   } else if (toShow) {
     toShow.setAttribute("id", "musicals_container")
   }
  }

  handleAddReview = (event, musicalId, reviewInfo) => {
    event.preventDefault()
    console.log("musical id for review being created: " + musicalId)
    fetch(`${baseURL}/musicals/${musicalId}/reviews`, {
     body: JSON.stringify(
      {show_seen: reviewInfo.show_seen,
         cast_to_see: reviewInfo.cast_to_see,
         date_of_show: reviewInfo.date_of_show,
         if_understudies: reviewInfo.if_understudies,
         understudies_seen: "," + reviewInfo.understudies_seen + ",",
         rating: reviewInfo.rating,
         if_stagedoor: reviewInfo.if_stagedoor,
         at_stagedoor: "," + reviewInfo.at_stagedoor + ",",
         photos: reviewInfo.photos,
         comments: reviewInfo.comments,
         reviewer_name: reviewInfo.reviewer_name
      }),
     method: 'POST',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
    })
    .then(review => {
      review.json()
      this.props.history.push(`/musicals/${musicalId}`)
    })
    this.getMusicals()
  }

  resetBackground = () => {
    document.body.style.backgroundImage = "url('./backdrop.jpg')"
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
    // console.log("add review is running", this.props)
  return (
    <div className="App">
      <h1>Welcome to the Theatre Tracker app!</h1>
      
      <Switch>
      <Route exact path="/" render={() => <Musicals toggleMusicals={this.toggleMusicals} musicals={this.state.musicals} showMusicals={this.showMusicals}/>}/>
        <Route path="/form" render={(props) => {
         return (
           <Form {...props} handleSubmit={this.handleAddReview} toggleMusicals={this.toggleMusicals} musical={this.state.musical}/>
         )
         }} />
         <Route path="/musicals/:id" exact render={(props) => <Reviews {...props} toggleMusicals={this.toggleMusicals} toggleMusicalsNow={this.toggleMusicals()}/>}/>
          </Switch>
       

     
    </div>
    );
  }
}

export default withRouter(App);
