import React from 'react'
import img1 from '../assets/images/icon-memory.svg'
import img2 from '../assets/images/icon-reaction.svg'
import img3 from '../assets/images/icon-verbal.svg'
import img4 from '../assets/images/icon-visual.svg'
import '../css/Style.css'

const Result = () => {
  return (
    <>
  <main>
    <div className="tee">
      <div className="toto">
        <h2>Your Result</h2>
      </div>
      <div className="tree">
       <h2>76</h2> 
       <h3>of 100</h3>
      </div>
      <div className="para">
       <h3>Great</h3>
        <p> You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
    
    <div className="job">
      <h2>Summary</h2>
      <div className="reaction">
        <div className="reaction2">
        <img src={img2} alt="" />
        <h3>Reaction</h3>
      </div>
        <p>80<span>/100</span></p> 
      </div>

      <div className="memory">
        <div className="memory2">
        <img src={img1} alt="" />
        <h3>Memory</h3>
      </div>
        <p>92<span>/100</span></p> 
      </div>
      
      <div className="verbal">
        <div className="verbal2">
        <img src={img3} alt="" />
        <h3>Verbal</h3>
      </div>
        <p>61<span>/100</span></p> 
      </div>

      <div className="visual">
        <div className="visual2">
        <img src={img4} alt="" />
        <h3>Visual</h3>
      </div>
        <p>72<span>/100</span></p> 
      </div>
      <a className="card-description-button" href="#">Continue</a>
    </div>
    
    </main>
    {/* <Summary/> */}
    </>
    
  )
}


export default Result
