import React from 'react'
import profile from '../assets/myImage.jpg'
import './Home.css'

const Home =()=> {
  return (
    <div className='content'>
      <div className='portfolio-intro'>
          <span className='name'> Hi, I'm <br/> 
            Ashmin Kumar Khadka</span><br/>
          <p>I am a <span>React Web Developer</span></p>
          <br />
          <p>I am a motivated and versatile individual, always
            eager to take on <br/>new challenges. </p>
      </div>
      <div className='profile-image'>
          <img src={profile} alt='my profile' className='profile'/>
      </div>
    </div>
  )
}

export default Home
