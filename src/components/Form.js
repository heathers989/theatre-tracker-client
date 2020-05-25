import React from "react";
import Input from "./Input.js";
// import Textarea from "./Textarea.js"
import { Link } from 'react-router-dom'

class Form extends React.Component {
  stageDoorCast = this.props.musical.cast.concat(this.props.musical.understudies)
  state = {
    show_seen: this.props.musical.name,
    cast_to_see: '',
    date_of_show: "",
    if_understudies: false,
    understudies_seen: [],
    rating: 1,
    if_stagedoor: false,
    at_stagedoor: [],
    photos: '',
    comments: '',
    reviewer_name: ''
  };

  handleShowSelect = () => {
    //sets background image based on show selected
    if (this.props.musical.name === "Moulin Rouge! The Musical"){
      // console.log("we want to change the background")
      document.body.style.backgroundImage = "url('https://i0.wp.com/newyorktheater.me/wp-content/uploads/2019/07/Moulin-Rouge-set.jpg?fit=1951%2C1301&ssl=1')"
      let mrImg1 = document.getElementById("img1")
      let mrImg2 = document.getElementById("img2")
      let mrImg3 = document.getElementById("img3")
      let mrImg4 = document.getElementById("img4")
      let mrImg5 = document.getElementById("img5")
      let mrImg6 = document.getElementById("img6")
      mrImg1.setAttribute("id", "mrimg1")
      mrImg2.setAttribute("id", "mrimg2")
      mrImg3.setAttribute("id", "mrimg3")
      mrImg4.setAttribute("id", "mrimg4")
      mrImg5.setAttribute("id", "mrimg5")
      mrImg6.setAttribute("id", "mrimg6")

   } else if (this.props.musical.name === "Waitress"){
    // console.log("we want to change the background")
    document.body.style.backgroundImage = "url('/img/waitress_backdrop.png')"

      let waitImg1 = document.getElementById("img1")
      let waitImg2 = document.getElementById("img2")
      let waitImg3 = document.getElementById("img3")
      let waitImg4 = document.getElementById("img4")
      let waitImg5 = document.getElementById("img5")
      let waitImg6 = document.getElementById("img6")
      waitImg1.setAttribute("id", "waitimg1")
      waitImg2.setAttribute("id", "waitimg2")
      waitImg3.setAttribute("id", "waitimg3")
      waitImg4.setAttribute("id", "waitimg4")
      waitImg5.setAttribute("id", "waitimg5")
      waitImg6.setAttribute("id", "waitimg6")
 } else {
    document.body.style.backgroundImage = "url('http://followtheart.info/dld.php?w=2560&h=1440&img=https://cdn.wallpapersafari.com/85/16/pLEhwO.jpg')"
   }
    }

  resetBackground = () => {
    //sets background image to default
      // document.body.style.backgroundImage = "url('http://followtheart.info/dld.php?w=2560&h=1440&img=https://cdn.wallpapersafari.com/85/16/pLEhwO.jpg')"
      document.body.style.backgroundImage = "url('/img/backdrop.jpg')"
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state)
  };

  checkUnderstudiesTrue = () => {
    console.log("saw understudies")
      this.setState({if_understudies: true })
      return true
  }

  checkUnderstudiesFalse = () => {
    console.log("did not see understudies")
      this.setState({if_understudies: false, understudies_seen: [] })
      return false
  }

  checkStagedoorTrue = () => {
    console.log("visited the stage door")
      this.setState({if_stagedoor: true })
      return true
  }

  checkStagedoorFalse = () => {
    console.log("did not visit the stage door")
      this.setState({if_stagedoor: false, at_stagedoor: [] })
      return false
  }

  addRemoveUnderstudy = (understudy, index) => {
  let copyUnderstudies = [...this.state.understudies_seen]
  if (document.getElementById("understudy"+index).checked){
    console.log("adding " + understudy)
    copyUnderstudies.unshift(understudy)
    console.log(copyUnderstudies)
    this.setState({
      understudies_seen: copyUnderstudies
    })
  } else {
    console.log("removing " + understudy)
    copyUnderstudies = copyUnderstudies.filter((n) => {return n !== understudy})
    console.log(copyUnderstudies)
    this.setState({
      understudies_seen: copyUnderstudies
    })
    console.log(this.state.understudies_seen)
  }
  }

  addRemoveStageDoor = (sdCastMember, index) => {
    let copyStageDoor = [...this.state.at_stagedoor]
  if (document.getElementById("stagedoor"+index).checked){
    console.log("saw " + sdCastMember + " at the stage door")
    copyStageDoor.unshift(sdCastMember)
    console.log(copyStageDoor)
    this.setState({
      at_stagedoor: copyStageDoor
    })
    console.log(this.state.at_stagedoor)
  } else {
    console.log("removing " + sdCastMember)
    copyStageDoor = copyStageDoor.filter((n) => {return n !== sdCastMember})
    console.log(copyStageDoor)
    this.setState({
      at_stagedoor: copyStageDoor
    })
  }
  }

  handleSubmit = (event) => {
   event.preventDefault()
   let musicalId = this.props.musical.id
   const reviewInfo = {
    show_seen: this.props.musical.name,
    cast_to_see: this.state.cast_to_see,
    date_of_show: this.state.date_of_show,
    if_understudies: this.state.if_understudies,
    understudies_seen: this.state.understudies_seen,
    rating: this.state.rating,
    if_stagedoor: this.state.if_stagedoor,
    at_stagedoor: this.state.at_stagedoor,
    photos: this.state.photos,
    comments: this.state.comments,
    reviewer_name: this.state.reviewer_name
  }
  console.log("props for form", this.props)
   this.props.handleSubmit(event, musicalId, reviewInfo)
   this.setState({ 
    show_seen: this.props.musical.name,
    cast_to_see: '',
    date_of_show: '',
    if_understudies: false,
    understudies_seen: [],
    rating: 1,
    if_stagedoor: false,
    at_stagedoor: [],
    photos: '',
    comments: '',
    reviewer_name: ''})
  }

  componentDidMount(){
    this.handleShowSelect()
  }

  render() {
    // console.log(this.props)
    return (
      
      <div id="formcontainer">
         <div id="leftimgcontainer">
        <div className="asideimg" id="img1"></div>
        <div className="asideimg" id="img2"></div>
        <div className="asideimg" id="img3"></div>
      </div>
      <div id="rightimgcontainer">
        <div className="asideimg" id="img4"></div>
        <div className="asideimg" id="img5"></div>
        <div className="asideimg" id="img6"></div>
      </div>
        <a href={"musicals/" + this.props.musical.id}> <button>All reviews for this musical</button></a>
    
      <h2>Enter your review for {this.props.musical.name}</h2>
     
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"reviewer_name"}
          placeholder={"Your name"}
          type={"text"}
          value={this.state.reviewer_name}
          id={"reviewer_name"}
        />
        {/* TO DO: use react bootstrap dropdown? */}
        <label htmlFor="cast_to_see">Cast member you were most excited to see:</label>
        <select value={this.state.cast_to_see} onChange={this.handleChange} id="cast_to_see">
          <option value="None">--Select--</option>
          {this.props.musical.cast.map(castMember => { 
            return <option value={castMember} key={castMember}>{castMember}</option>})}
            <option value="Other">Other</option>
        </select>
        <Input
          handleChange={this.handleChange}
          name={"date_of_show"}
          placeholder={"Date of show (yyyy-mm-dd)"}
          type={"text"}
          value={this.state.date_of_show}
          id={"date_of_show"}
        />
        <label htmlFor="if_understudies">Did you see any understudies at this performance? (if so, select all)</label><br/>
        <Input onClick={this.checkUnderstudiesTrue}
          // handleChange={this.handleChange}
          name={"if_understudies"}
          title={"yes"}
          type={"radio"}
          value={this.state.if_understudies}
          id={"if_understudies_true"}
        />
        <Input
          // handleChange={this.handleChange}
          onClick={this.checkUnderstudiesFalse}
          name={"if_understudies"}
          title={"no"}
          type={"radio"}
          value={this.state.if_understudies}
          id={"if_understudies_false"}
        />
      <div></div>
      {this.state.if_understudies === true ? 
      this.props.musical.understudies.map((understudy, index) => { 
          return <Input
          // handleChange={this.handleChange}
          onClick={() => this.addRemoveUnderstudy(understudy, index)}
          key={understudy}
          name={"understudy"+index}
          title={understudy}
          type={"checkbox"}
          className={"understudies_seen"}
          value={this.state.understudies_seen}
          id={"understudy"+index}
        /> 
          }) : <div></div>}
         <div></div>
           
          <Input
          handleChange={this.handleChange}
          name={"rating"}
          title={"rate the show from 1-5"}
          type={"number"}
          value={this.state.rating}
          id={"rating"}
        />
         <label htmlFor="if_stagedoor">Did you visit the stage door after this performance? (if so, select all cast members that signed)</label><br/>
        <Input
          onClick={this.checkStagedoorTrue}
          // handleChange={this.handleChange}
          name={"if_stagedoor"}
          title={"yes"}
          type={"radio"}
          value={this.state.if_stagedoor}
          id={"if_stagedoor"}
        />
        <Input
          onClick={this.checkStagedoorFalse}
          // handleChange={this.handleChange}
          name={"if_stagedoor"}
          title={"no"}
          type={"radio"}
          value={this.state.if_stagedoor}
          id={"if_stagedoor"}
        />
        <div></div>
      {this.state.if_stagedoor === true ? 
      
       this.stageDoorCast.map((sdCastMember, index) => { 
         return <Input
             // handleChange={this.handleChange}
             onClick={() => this.addRemoveStageDoor(sdCastMember, index)}
             key={sdCastMember}
             name={"stagedoor"+index}
             title={sdCastMember}
             type={"checkbox"}
             className={"at_stagedoor"}
             value={this.state.at_stagedoor}
             id={"stagedoor"+index}
           /> 
        })

          : <div></div> }
        
            {/* TO DO: user should be able to upload photos */}
            <div></div>
        <Input
          handleChange={this.handleChange}
          name={"photos"}
          placeholder={"link to photos from the show or stagedoor"}
          type={"text"}
          value={this.state.photos}
          id={"photos"}
        />

        <textarea rows="5" cols="5" onChange={this.handleChange}
          name={"comments"}
          placeholder={"any comments regarding the performance"}
          type={"text"}
          value={this.state.comments}
          id={"comments"}></textarea>
        
        {/* <Input
          handleChange={this.handleChange}
          name={"comments"}
          placeholder={"any comments regarding the performance"}
          type={"text"}
          value={this.state.comments}
          id={"comments"}
        /> */}
        <div></div>
        <input id="input" type="submit" value={"Add Your Review"}/>
      </form>
      
      <Link to="/">
            <button onClick={() => {this.props.toggleMusicals(); this.resetBackground()}}>Back to Musicals Index</button>
            </Link>
      </div>
    );
  }
}
export default Form;