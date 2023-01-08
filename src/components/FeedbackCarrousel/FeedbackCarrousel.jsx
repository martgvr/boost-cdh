import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import './feedbackcarrousel.css'

function FeedbackCarrousel() {
  return (
    <div className='feedbackcarrousel'>
      <FeedbackCard />
      <FeedbackCard />
    </div>
  )
}

export default FeedbackCarrousel