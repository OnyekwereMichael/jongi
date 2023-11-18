import React from 'react'
import small from '../Assests/small.png';
import Jongi from '../Assests/JONGI MEDIA.png';
import circle from '../Assests/Ellipse 1.png'
function Footer() {
  return (
    <footer>
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
         <div className='jh'>
        <p className='hj'>Get in <br/>touch</p>
      </div>
      
</footer>

  )
}

export default Footer