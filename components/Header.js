import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import logo from '../public/SBHLlogo.png'
const Header = () => {
  return (
   <>
   
   <div className={styles.header} >
          <Image src={logo} className={styles.logo} alt = 'logo' />
          </div>
   </>
  )
}

export default Header