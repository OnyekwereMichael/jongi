import React from "react";
// import { BiMenuAltRight } from "react-icon/bi"
import { useState } from "react";
import logo from "../Assests/LOGO (1).png";
import Jongi from "../Assests/JONGI MEDIA.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header>
      <section className="jon">
        <div>
          <p className="header__p">SA / 2000</p>
        </div>

        <div>
          <img src={logo} alt="" />
        </div>

        <div className="header__links">
          <ul>
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">CONTACT</a>
          </ul>
        </div>
      </section>

  
      <div>
        <img src={Jongi} alt="" className="jongi" />
      </div>

      <div>
        <p className="scroll">SCROLL DOWN</p>
      </div>
      <hr />
    </motion.header>
  );
}

export default Header;
