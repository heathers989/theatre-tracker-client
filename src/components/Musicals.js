import React from 'react';
import { Link } from 'react-router-dom'
import Reviews from './Reviews.js'
import { Route } from 'react-router-dom'

function Musicals(props) {
  let {musicals, showMusicals} = props;
  // let hideMusicals = () => {
  //   let hide = document.getElementById("musicals_container").style.display = "none"
  //   return hide
  // }
    return (
      <>
      <div id="musicals_container">
      <h4>Click the playbill of any show you'd like to read reviews for.</h4>
        <div className="musicalsindex">
        
    {musicals.map(musical => (
    <div className="onemusical" key={musical.id} >
             

             <Link to={{
               pathname: `/musicals/${musical.id}`
             }}><img alt="playbill" src={musical.playbill}/></Link>     
      <br/>
      {/* use react router to have button bring up review form */}
      <button onClick={() => showMusicals(musical)}>
        <Link to="/form">Add Review for {musical.name}</Link>
        </button>
</div>
        
    ))}
          </div>
        </div>
        <Route path="/musicals/:id" exact render={(props) => <Reviews {...props} musicals={musicals}/>}/>
      </>
    )
  }

export default Musicals