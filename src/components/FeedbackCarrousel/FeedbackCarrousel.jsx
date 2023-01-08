import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import './feedbackcarrousel.css'

function FeedbackCarrousel() {
  return (
    <div className='feedbackcarrousel'>
      <FeedbackCard 
        text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} 
        author={'Julián Alvarez'} 
        location={'manchester'} 
        image={'author.png'} 
      />
      <FeedbackCard 
        text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'} 
        author={'Lionel Messi'} 
        location={'paris'} 
        image={'author.png'} 
      />
    </div>
  )
}

export default FeedbackCarrousel