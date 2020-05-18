import React from 'react';

function Musicals(props) {
  let {musicals} = props;
  // users = props;
  // getUsers()
    return (
      <>
     
        <div className="userinfo">
         
    {musicals.map(musical => (
    <div className="onemusical" key={musical.id} >
                <img alt="playbill" src={musical.playbill}/>        
      <br/>
      {/* use react router to have button bring up review form */}
      <button>Add Review for {musical.name}</button>

</div>
        
    ))}
        </div>
        
      </>
    )
  }

export default Musicals