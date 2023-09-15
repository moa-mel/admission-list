import React from 'react'
import "./styles.css"
import faill from "../../images/Vector(5).png"

const VerFailed = () => {
  return (
    <div className='verfailed'>
      <img src={faill} alt='' className='vf-img' />
      <h2> Verification failed!</h2>
      <p>You must have entered a wrong code.
        Please try again</p>
    </div>
  )
}

export default VerFailed