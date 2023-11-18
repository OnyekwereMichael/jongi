import React from 'react'
import { useState } from 'react';
import logo from '../Assests/LOGO (1).png';
import Jongi from '../Assests/JONGI MEDIA.png';


function Header() {
  const [Menuopen, setMenuopen] = useState(false);
  const toggle = () =>{
    setMenuopen((Menuopen) => !Menuopen)
  }
  return (
        <header>
          <section className='jon'>
          <div>
          <p className='header__p'>SA / 2000</p>
          </div>

        <div>
        <img src={logo} alt="" />
          </div>

          <div className='header__links'>
            <ul>
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">CONTACT</a>
            </ul>
          </div>
        </section>

        {/* <button class = "hamburger" onClick={() =>{
          setMenuopen(!Menuopen)
        }}>
        <div class="bar">  </div>
    </button> */}
    

      <button onClick={toggle} className='hamburger'>
      <div className='bar'></div>
    </button>

   

    <ul className={Menuopen ? "Menuopen" : ""}>
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">CONTACT</a>
            </ul>
        
          <div>
          <img src={Jongi} alt="" className='jongi'/>
          </div>

          <div>
          <p className='scroll'>SCROLL DOWN</p>
          </div>
          <hr />
        </header>
       
       
      
  )
 
}

export default Header;
