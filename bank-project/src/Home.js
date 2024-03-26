import React from 'react'
import "./Home.css"

import logoImage from "./images/logo.png";
const Home = () => {
  return (
    <div className='home-container'>
       
        <div className='img-container'></div>
        <div className='text-container'>
        <img src={logoImage} alt="Bharth Bank logo"></img>
        <h1>Welcome!</h1>
      
      <p>
        ↪ Experience the seamless user-friendly interface.
        Enhance your financial journey with our Bank.
        </p>
      {/* <p> We assured that your personal and
          financial information is protected.
      </p> */}
      <p>
        ↪   Start your journey with us today and experience a new era of online banking.
     </p>
        </div>
    </div>
  )
}

export default Home