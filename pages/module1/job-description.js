import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
const jobDescription = () => {
  return (
   <>
   <Header/>

   <div className={styles.jobDescriptionContainer}>


<div>
  <h1>Training Module 1 A Job Description</h1>
</div>

<div className={styles.jobDescriptionSectionsContainer}>
  <div className={styles.jobDescriptionSections}>
   
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <Image src='/responsibility 1.png' width={180} height={180} className={styles.jobDescriptionSectionImg} alt = 'jdImg' />
        </div>
        <div className={styles.flipcardback}>
          
          <p className={styles.flipcardbackContent}>The position also aims to ensure they meet the SBHL's 5 Pillars, which include: Safe and Welcoming Environment, Medical and Welfare Support, Tailored meal provisions.</p>
        
        </div>
      </div>
    </div>
    <h3>Job Decription</h3>
    <p className={styles.jobDescriptionSectionsContent}>The position also aims to ensure they meet the SBHL's 5 Pillars, which include: Safe and Welcoming Environment, Medical and Welfare Support, Tailored meal provisions..</p>
  </div>

  <div className={styles.jobDescriptionSections}>
   
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <Image src='/to-do-list 1.png' width={180} height={180} className={styles.jobDescriptionSectionImg} alt = 'jobDescriptionSectionImg ' />
        </div>
        <div className={styles.flipcardback}>
         
          <p className={styles.flipcardbackContent}>The position also aims to ensure they meet the SBHL's 5 Pillars, which include: Safe and Welcoming Environment, Medical and Welfare Support, Tailored meal provisions.</p>
         
        </div>
      </div>
    </div>
    <h3>Essential Duties and resposibilities :</h3>
    <p className={styles.jobDescriptionSectionsContent}>The Service User (SU) role involves a number of duties, including the meeting, greeting, and attending to the needs of Service Users. The SU's are responsible for providing a friendly, welcoming, and efficient service to all Service Users in line with our vision and values on Service User satisfaction.</p>

  </div>

  <div className={styles.jobDescriptionSections}>
    
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <Image src='/skills 9.png' width={180} height={180} className={styles.jobDescriptionSectionImg} alt = 'jobDescriptionSectionImg' />
        </div>
        <div className={styles.flipcardback}>
        
          <p className={styles.flipcardbackContent}>The position also aims to ensure they meet the SBHL's 5 Pillars, which include: Safe and Welcoming Environment, Medical and Welfare Support, Tailored meal provisions.</p>
        
        </div>
      </div>
    </div>
    <h3>Key Competence expectations :</h3>
    <p className={styles.jobDescriptionSectionsContent}> Housing officer's role includes the responsibility for providing a wide range of services including but not limited to: Advice, advice and support on areas relating to housing/tenancy support. The role also includes the ability to investigate and report possible key breaches of Occupancy Agreement.</p>
    
  </div>
  <div className={styles.jobDescriptionSections}>
    
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <Image src='/performance 1.png' width={180} height={180} className={styles.jobDescriptionSectionImg} alt = 'jobDescriptionSectionImg' />
        </div>
        <div className={styles.flipcardback}>
        
          <p className={styles.flipcardbackContent}>The position also aims to ensure they meet the SBHL's 5 Pillars, which include: Safe and Welcoming Environment, Medical and Welfare Support, Tailored meal provisions.</p>
       
        </div>
      </div>
    </div>
    <h3>Performance Management</h3>
    <p className={styles.jobDescriptionSectionsContent}>Responsibilities include ensuring compliance with the Data Protection Act, Health and Safety at Work Act and Equalities and DiversityAct. The role also includes the responsibility for ensuring that SBHL statutes are complied with.</p>
  </div>

</div>



<div className={styles.jobDisNextButContainer} >
   <Link href= '/module1/job-description-video'><button className={styles.jobDisNextBut} >Next</button></Link>   
    </div>

</div>

   </>
  )
}

export default jobDescription