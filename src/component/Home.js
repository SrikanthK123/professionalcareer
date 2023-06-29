import React from 'react'
import resume from '.././Resume.pdf'

const Home = () => {
  return (
    <>
    <div className='home'>
     <div className='nameTitle'>
        <h4>Hey Guys!</h4>
        <p className='intro1'>I'm from Hyderabad, recently I completed my graduation in <span>BTech</span> Cse background.</p>
        <p className='intro2'>To pursue a successful career in an esteemed organization,that utilizes my skills and smart working capability for its advancement and at the same time fasten my growth, both professionally and personally. </p>

     </div>
    <a href={resume} download="Resume.pdf"><button className='downloadbtn'>Resume</button></a>
    <div className='personaldetail'>
   
  <h3 className='emaillabel'>Email - <a href="mailto:?to=kondapakasrikanth2010@gmail.com.com&subject=Hello%20there&body=I%20wanted%20to%20say%20hi!"><span className='emailLink'>kondapakasrikanth2010@gmail.com</span></a> </h3>
    <h4 className='contactlabel'>Contact Me - <span className='phno'>9381990315</span></h4>
    </div>
    </div>
     
     </>
  )
}

export default Home
