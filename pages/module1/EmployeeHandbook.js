import Header from '@/components/Header'
import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
// import Card from '@/components/card'
import { CSSTransition } from 'react-transition-group'
const employeeHandbook = () => {
  // const [ShowFront,SetShowFront] = useState(false)
  return (
    <>
 <div className= {styles.app}>
<div className= {styles.flippableCardContainer}>
  <CSSTransition 
  timeout = {300} 
 >
  {/* <Card /> */}
  </CSSTransition>

</div>
</div> 
    </>
  )
}

export default employeeHandbook