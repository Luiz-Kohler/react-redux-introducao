import React from 'react';
import './Card.css';


function GetColor(props){
  if(props.Blue){
    return "Blue"
  }

  if(props.Purple){
    return "Purple"
  }

  if(props.Pink){
    return "Pink"
  }

  if(props.Green){
    return 'Green'
  }

  return "Purple"
}


function Card(props) {
  return(
      <div className={`Card ${GetColor(props)}`}>
          <div className='Header'>
            <span className='Tittle'>{props.tittle}</span>
          </div>
          <div className='Content'>
            {props.children}  
          </div>
      </div>
  )
}

export default Card;