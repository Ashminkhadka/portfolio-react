import React from 'react'
import profile from '../assets/myImage.jpg'
import './Home.css'

const Home =()=> {
  return (
    <div className='main-contents'>
      <div className='portfolio-intro'>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm <span className='name'>Ashmin Kumar Khadka,</span>
          <br />
          a passionate web developer with a knack for  <br/> creating dynamic and responsive web applications.
          <br />
          Explore my projects and learn more about my skills and experiences.
        </p>
      </div>
      <div className='profile-image'>
          <img src={profile} alt='my profile' className='profile'/>
      </div>
    </div>
  )
}

export default Home
