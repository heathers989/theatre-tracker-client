import React from 'react';
import { Link } from 'react-router-dom'


function Musicals(props) {
  let {musicals, showMusicals} = props;
  // users = props;
  // getUsers()
    return (
      <>
     
        <div className="musicalsindex">
         
    {musicals.map(musical => (
    <div className="onemusical" key={musical.id} >
                <img alt="playbill" src={musical.playbill}/>        
      <br/>
      {/* use react router to have button bring up review form */}
      <button onClick={() => showMusicals(musical)}>
        <Link to="/form">Add Review for {musical.name}</Link>
        </button>

</div>
        
    ))}
        </div>
        
      </>
    )
  }

export default Musicals