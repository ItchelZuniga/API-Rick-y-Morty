import React from 'react'

const Episode = ({episode= []}) => {
  return (
    <>
    <br/>
    <br/>
    <br/>

    <div className='container col-12'>
    <div className='row'>
      
      {episode.map((item, index) => (
      <div key={index} className='col'>
        <div className='card' style={{width: " 18rem"}}>
          <div className='card-body'>
            <h5 className='card-title'>{item.name}</h5>
            <hr />
            <p className='card-text'><b>Episode: </b>{item.episode} </p>
            <p className='card-text'><b>Air Date:</b>{item.air_date} </p>
            <p className='card-text'><b>Create:</b>{new Date (item.created).getFullYear()}</p>        
           </div>
        </div>
      <br />
      </div>
        ))}

     </div>
   </div>
  </>
 )
}

export default Episode;
