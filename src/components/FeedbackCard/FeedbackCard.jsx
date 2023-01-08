import React from 'react'
import './feedbackcard.css'

function FeedbackCard() {
  return (
    <div className='feedbackcard'>
      <img src="quote.png" alt="" />
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <div className='feedbackcard__author'>
        <div className='feedbackcard__author--image'><img src="author1.png" alt="" /></div>
        <div className='feedbackcard__author--text'>
          <h4>Julián Alvarez</h4>
          <p>MANCHESTER</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard