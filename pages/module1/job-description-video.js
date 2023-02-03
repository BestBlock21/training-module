import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const jobdescriptionvideo = () => {
  return (
    <>
    <div>
        <Header/>
    </div>
 <div className={styles.jobDescriptionVideoContainer}>

 <div>
   <h1>Let's Learn Through Video</h1>
 </div>

 <div className={styles.videoContainer}>
   <video src='/sample.mp4' height={425} width={800} controls ></video>

 </div>

 <div className={styles.NextChapterButContainer}>
   <Link href='/module1/employee-handbook' ><button className={styles.NextChapterBut}>Next Chapter</button></Link>
 </div>
</div>
</>
  )
}

export default jobdescriptionvideo