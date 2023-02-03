import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
const modules = () => {
  return (
    <>

      <Header />
      <div className={styles.homeModulesContainer}>
       
          <h1>Modules You will Learn!!</h1>
        
        <div className={styles.differentModuleHome}>

          <div className={styles.ModulesIntro}>

            <div className={styles.SubModule1Intro}>
              {/* <div>
                                <Image src={cap}/>
                             </div> */}
              <p>Module1 includes various sections that brief the trainee about his job description, and operational structure along with benefits provided to the employee too.</p>
               <div className={styles.SubModule1IntroLogo}>
                <Image src= '/job-seeking.png' className={styles.charLogo} alt='charLogo' width={100} height = {100} />
              </div> 
            </div>

          </div>
          <div className={styles.ModulesIntro}>
            <div className={styles.SubModule1Intro}>
              <p>The next module explains the process of maintenance, security, complaints & guest experience at the organization by using the Meraki tablet provided by the company along with all the features explained.</p>
               <div className={styles.SubModule1IntroLogo}>
                <div>
                  <Image src= '/customer-review.png' className={styles.charLogo} alt='charLogo' width={100} height = {100} />
                </div>
              </div> 
            </div>
          </div>
          <div className={styles.ModulesIntro}>
            <div className={styles.SubModule1Intro}>
              <p>Module 3 is meant to address the training about different types of health emergencies that takes place with SUs and how the trainee should operate in such circumstances.</p>
              <div className={styles.SubModule1IntroLogo}>
                <Image src= '/healthcare.png' className={styles.charLogo} alt='charLogo' width={100} height = {100} />
              </div>

            </div>
          </div>
          <div className={styles.ModulesIntro}>
            <div className={styles.SubModule1Intro}>
              <p>Lorem ipsum dolor sit amet consectetur. Vivamus id vel nam pharetra pretium arcu. Vel duis tristique elementum ut volutpat egestas</p>
              <div className={styles.SubModule1IntroLogo}> 
                <Image src='/LogoChar.png' className={styles.charLogo} alt='charLogo' width={100} height = {100}  />
              </div>
            </div>
          </div>

        </div>
        <div className={styles.getStartedButContainer}>
          <Link href='/module1'><button className={styles.getStartedBut}>Start Module 1</button></Link>
        </div>
      </div>

    {/* <Footer/> */}


    </>
  )
}

export default modules