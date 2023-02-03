import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Footer from '@/components/Footer'

const index = () => {
  return (
       <>
       <Header/>
       
       <div className={styles.Module1Poster}>
                <div className={styles.module1Head}>
                    <h1>Module 1</h1>
                </div>
                <div>
                    <p className={styles.module1Quest}>
                        What does Module 1 Explain?
                    </p>
                </div>
            </div>
            <div className={styles.Module1Intro}>
                <p>
                    Module 1 includes various sections that brief the trainee about his job description, and operational structure along with benefits provided to the employee too. Various other topics including PIP, audits, the RMS app, and its training videos are briefed in detail.
                </p>
                <div className={styles.StartLearningModul1ButContainer}>
                    <Link href='module1/job-description'><button className={styles.startLearningModule1But}>Let's Start Training</button></Link>
                </div>
            </div>
            <Footer/>

       </>

    )
}

export default index