import React from 'react';
import RECT from '../Assests/Rectangle 1 (1).png'
import red from '../Assests/_.png'
import { Link } from 'react-router-dom';
function Article() {
  return (
                <main>
              <section className='main_sec'>
            <div>
                <p >CREATIVE AGENCY</p>
            </div>
            <div>
                <p>WHAT CAN WE DO FOR YOU?</p>
            </div>
            </section>

          
            <section>
                <img src={RECT} alt="" />
          </section>


            <section>
              <p className='art_sec'>{"Dedicated to exceeding client's expectation."}</p>
          </section>

      <section>
            <p className='agency'>We are a creative agency dedicated to exceeding client's expectation seeting benchmarks in the industry, transfroming ideas into extra ordinary experience that captivate audiences and prospels businessess towards sucess</p>
      </section>


    <article className='double'>
      <section className='About'>
        <div>
            <a href="">ABOUT US</a>
        </div>
        <div>
            <img src={red} alt="" className='ARROW'/>
        </div>
      </section>

      <section className='About'>
        <div>
            <a href="">WHAT WE DO</a>
        </div>

        <div>
            <img src={red} alt="" className='ARROW'/>
        </div>
        
      </section>
      </article>
            </main>
    
   
  )
}

export default Article;




