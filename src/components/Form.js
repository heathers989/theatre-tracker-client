import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
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

addRemoveUnderstudy = (understudy, index) => {
  let copyUnderstudies = [...this.state.understudies_seen]
  if (document.getElementById(index).checked){
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
  }
}

  handleSubmit = (event) => {
   event.preventDefault()
   const reviewInfo = {
    show_seen: this.props.musical,
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

   this.props.handleSubmit(event, reviewInfo)
   this.setState({ 
    show_seen: this.props.musical,
    cast_to_see: '',
    date_of_show: '',
    if_understudies: '',
    understudies_seen: [],
    rating: '',
    if_stagedoor: '',
    at_stagedoor: [],
    photos: '',
    comments: '',
    reviewer_name: ''})
  }

  render() {
    return (
      <>
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
        </select>
        {/* TO DO: pass selected cast member to state */}
        <Input
          handleChange={this.handleChange}
          name={"date_of_show"}
          placeholder={"Date of show (yyyy-mm-dd)"}
          type={"text"}
          value={this.state.date_of_show}
          id={"date_of_show"}
        />
       
        {/* TO DO: set radio buttons to be associated with boolean values
          if true, show understudies list
         */}
        <label htmlFor="if_understudies">Did you see any understudies at this performance? (select all)</label><br/>
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
          name={index}
          title={understudy}
          type={"checkbox"}
          className={"understudies_seen"}
          value={this.state.understudies_seen}
          id={index}
        /> 
          }) : <div></div>}
         

        
         {/* TO DO: push selected cast members to state */}
         <div></div>
           
          <Input
          handleChange={this.handleChange}
          name={"rating"}
          title={"rate the show from 1-5"}
          type={"number"}
          value={this.state.rating}
          id={"rating"}
        />
         <label htmlFor="if_stagedoor">Did you go to the stage door after this performance? (select all cast members that signed)</label><br/>
        <Input
          handleChange={this.handleChange}
          name={"if_stagedoor"}
          title={"yes"}
          type={"radio"}
          value={this.state.if_stagedoor}
          id={"if_stagedoor"}
        />
        <Input
          handleChange={this.handleChange}
          name={"if_stagedoor"}
          title={"no"}
          type={"radio"}
          value={this.state.if_stagedoor}
          id={"if_stagedoor"}
        />
        {/* TO DO: Only show stagedoor dropdown/options if above input is yes/true, change to checkboxes  */}
        <select id="at_stagedoor" multiple>
          {this.props.musical.understudies.map(understudy => { 
            return <option value={this.state.at_stagedoor} key={understudy}> {understudy} </option>})}
            {this.props.musical.cast.map(castMember => { 
            return <option value={this.state.at_stagedoor} key={castMember}> {castMember} </option>})}
            </select>
            {/* TO DO: user should be able to upload photos */}
        <Input
          handleChange={this.handleChange}
          name={"photos"}
          placeholder={"link to photos from the show or stagedoor"}
          type={"text"}
          value={this.state.photos}
          id={"photos"}
        />
        <Input
          handleChange={this.handleChange}
          name={"comments"}
          placeholder={"any comments regarding the performance"}
          type={"text"}
          value={this.state.comments}
          id={"comments"}
        />
        <input type="submit" value={"Add Your Review"}/>
      </form>
      </>
    );
  }
}
export default Form;
