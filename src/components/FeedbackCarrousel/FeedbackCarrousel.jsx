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
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat.'} 
        author={'Lionel Messi'} 
        location={'paris'} 
        image={'author.png'} 
      />
      <FeedbackCard 
        text={'Condimentum vitae sapien pellentesque habitant morbi tristique. In massa tempor nec feugiat nisl pretium fusce. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.'} 
        author={'Leandro Paredes'} 
        location={'Paris Saint-Germain'} 
        image={'author.png'} 
      />
      <FeedbackCard 
        text={'Amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor rhoncus dolor purus non enim. A iaculis at erat pellentesque adipiscing commodo elit. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.'} 
        author={'Alexis Mac Allister'} 
        location={'Brighton & Hove Albion'} 
        image={'author.png'} 
      />
    </div>
  )
}

export default FeedbackCarrousel