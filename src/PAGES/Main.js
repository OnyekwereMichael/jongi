
import React, {useEffect, useRef} from 'react'
import blue from '../Assests/2020 - 23.png';
import fruit from '../Assests/fruit.png';
import coca from '../Assests/Rectangle 2 (2).png'
import phone from '../Assests/Rectangle 2 (1).png'
import man from '../Assests/Rectangle 2.png';
import { motion, useInView, useAnimation } from "framer-motion"

function Main() {
  const mat = [
    {
      name: "ADRIAN DEWEE",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
      category: "PHOTOGRAPHY",
      img: man,
    },
    {
      name: "ORANGE",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
      category: "BRANDING",
      img: fruit,
    },
    {
      name: "NIKE",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
      category: "VIDEOGRAPHY",
      img: phone,
    },
    {
      name: "COCA COLA",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
      category: "BRANDING",
      img: coca,
    },
  ]

  return (
      <motion.main
      >
          <hr className='hr'/>
          <section className='feat'>
              <div>Featured works</div>
              <div>See some of our recent years<br/>over the years</div>
          </section>

          <section className='see'>
              <div>
                   <p>See all</p>
              </div>
                <div>
                    <img src={blue} alt="" className='exp'/>
                </div>
          </section>


  <div className='mapped'>
{mat.map((item, index) =>{
  return (
    <motion.div key={index}
    variants={{
      hidden: {
        x: -50, y: -50
      },
      visible: {
        x: 0, y: 0
      }
    }}
    initial= "hidden"
   whileInView="visible"
   viewport={{
    once: true,
   }}
    transition={{duration: 0.3, delay: index * 0.13}}
    >
      <div>
        <img src={item.img} alt="" className='cmf'/>
    </div>
 <div>
      <p className='para_one'>{item.name}</p>
 </div>
 <div>
    <p className='para_two'>{item.text}</p>
 </div>
 <div>
      <p className='para_three'>{item.category}</p>
 </div>
    </motion.div>
  
  )
})}
      </div>
      </motion.main>
  )
}

export default Main;