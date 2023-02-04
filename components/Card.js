import React from 'react'
import styles from '@/styles/Home.module.css'
// import styles from '@/styles/flipCard.css'
const Card = ({onClick}) => {
  return (
    <div className= {styles.card} onClick = {onClick} >
        <div  className= {styles.cardFront}>Front</div>
    <div className= {styles.cardBack}>Back</div>
    
    
    </div>
  )
}

export default Card