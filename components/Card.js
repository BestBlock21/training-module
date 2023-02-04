import React from 'react'
import styles from '@/styles/Home.module.css'
// import styles from '@/styles/flipCard.css'
const Card = () => {
  return (
    <div className= {styles.card}  >
        <div  className= {styles.cardFront}>Front</div>
    <div className= {styles.cardBack}>Back</div>
    
    
    </div>
  )
}

export default Card