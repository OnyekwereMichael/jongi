import React from 'react'
import small from '../Assests/small.png';
import Jongi from '../Assests/JONGI MEDIA.png';
import circle from '../Assests/Ellipse 1.png'
import { motion} from "framer-motion"
function Footer() {
  const conitaner = {
    hidden: {
      y: 800, opacity: 0
    },
    visible:{
      y: 0, opacity: 1,
      transition:{
        duration: 1.6, ease: "easeInOut",
      }
    }
  }
  return (
    <motion.footer  
    variants={conitaner}
    initial= "hidden"
    whileInView= "visible"
    transition={{duration: 0.6, delay: 0.23, ease: "easeInOut"}}
    viewport={{
      once: true
    }}
    >
    <h2 className='client'>CLIENT'S REVIEW</h2>
    <hr />

    <section className='VEN'>
        <div><p className='VEN_P'>EMMA'S VENTURES</p></div>
        <div><p>SERVICES</p></div>
        <div><p>EMMA JIM </p></div>
    </section>

    <section className='brand'>
        <div>
        <button className='branding'>Branding</button>
        </div>
        <div>
        <img src={small} alt=""/>
        <p className="ipsum">lorem is Lorem ipsum dolor sit amet,<br/> consecteturadipiscing elit, sed do eiusmod tem,</p>
        </div>
        </section>
        <hr/>

        <div className='marq'>
          <div className='marquee'>Wanna be starting something, drop us a line.</div>
        </div>

        <img src={Jongi} alt="" className='jon'/>

         <hr/>
         <section className='ift'>
          <div className='span'>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>twitter</p>
          </div>

          <div>
          <p>@jongimedia2023</p>
          </div>
          
         </section>
         <motion.div 
         initial={{x:[0, 200, 0,200]}}
         animate={{x: [100, -200, 300, -400], y:[-100, 200 , -300, 400]}}
         transition={{repeat: Infinity, duration: 5, delay: 0.4,
        }}
         className='jh'>
        <p className='hj'>Get in <br/>touch</p>
      </motion.div>
      
</motion.footer>

  )
}

export default Footer