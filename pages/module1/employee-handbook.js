import Header from '@/components/Header'
import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Card from '@/components/card'
import { CSSTransition } from 'react-transition-group'
const employeeHandbook = () => {
  const [showFront,setShowFront] = useState(false)
  return (
    <>
<div className= {styles.app}>
<div className= {styles.flippableCardContainer}>
  <CSSTransition in = {showFront}
  timeout = {300} 
  classNames = 'flip'>
  <Card onClick={()=>{
setShowFront((v)=>!v);
  }} />
  </CSSTransition>

</div>
</div>
    </>
  )
}

export default employeeHandbook