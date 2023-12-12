import React from 'react'
import { BiMenuAltRight } from "react-icon/bi"
import { useState } from 'react';
import logo from '../Assests/LOGO (1).png';
import Jongi from '../Assests/JONGI MEDIA.png';
import {motion } from "framer-motion"



function Header() {
  const [Menuopen, setMenuopen] = useState(false);
  const toggle = () =>{
    setMenuopen((Menuopen) => !Menuopen)
  }
  return (
        <motion.header 
        >
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

<button className='bars block md:hidden sm:block m-3'
 onClick={()=>setMenuopen((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
  </button>
    
    <ul className={Menuopen ? "Menuopen" : ""}>
            {/* <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">CONTACT</a> */}
            </ul>
        
          <div>
          <img src={Jongi} alt="" className='jongi'/>
          </div>

          <div>
          <p className='scroll'>SCROLL DOWN</p>
          </div>
          <hr />
        </motion.header>
  )
 
}

export default Header;
