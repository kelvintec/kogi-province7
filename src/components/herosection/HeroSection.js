"use client"
import React from "react";
import Image from "next/image";
import styles from "./herosection.module.css";
// import './herosection.css';
// const { heroContainer, heroHeader, imageWrapper } = styles;
const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL = "/banner.png"

function HeroSection() {
  return (
    <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        <h1>RCCG Kogi Province 7</h1>
        <p>Open Heavens Mega Parish, Isanlu Makutu, Kogi State, Nigeria</p>
      </div>
    </div>
    
       
   
  );
}
export default HeroSection;