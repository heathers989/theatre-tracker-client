import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    hometown: "",
    interests: "",
    country: "",
    city: "",
    landmarks: "",
    season: "",
    image: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state)
  };

  handleSubmit = (event) => {
   event.preventDefault()
   const userinfo = {
    name: this.state.name,
    interests: this.state.interests,
    hometown: this.state.hometown,
    country: this.state.country,
    city: this.state.city,
    landmarks: this.state.landmarks,
    season: this.state.season,
    image: this.state.image
  }
  if (this.props.user) {userinfo.id = this.props.user.id}
  else {console.log("no user here")}

   this.props.handleSubmit(event, userinfo)
   this.setState({name: '', interests: '', hometown: '', country: '', city: '', landmarks: '', season: '', image: ''})
  }

  componentDidMount() {
    if (this.props.user) {
      const { name, interests, hometown, id } = this.props.user;
      this.setState({
        name: name || "",
        interests: interests || "",
        hometown: hometown || "",
        id: id || "",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Your name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"interests"}
          placeholder={"Your interests"}
          type={"text"}
          value={this.state.interests}
          id={"interests"}
        />
        <Input
          handleChange={this.handleChange}
          name={"hometown"}
          placeholder={"Where you're from"}
          type={"text"}
          value={this.state.hometown}
          id={"hometown"}
        />
        <Input
          handleChange={this.handleChange}
          name={"country"}
          placeholder={"Country to visit"}
          type={"text"}
          value={this.state.country}
          id={"country"}
        />
         <Input
          handleChange={this.handleChange}
          name={"city"}
          placeholder={"City to visit"}
          type={"text"}
          value={this.state.city}
          id={"city"}
        />
          <Input
          handleChange={this.handleChange}
          name={"landmarks"}
          placeholder={"Landmarks to see"}
          type={"text"}
          value={this.state.landmarks}
          id={"landmarks"}
        />
         <Input
          handleChange={this.handleChange}
          name={"season"}
          placeholder={"Season to visit"}
          type={"text"}
          value={this.state.season}
          id={"season"}
        />
        <Input
          handleChange={this.handleChange}
          name={"image"}
          placeholder={"image link"}
          type={"text"}
          value={this.state.image}
          id={"image"}
        />
        <input type="submit" value={this.props.user ? "update" : "share your travel dreams"}/>
      </form>
    );
  }
}
export default Form;
