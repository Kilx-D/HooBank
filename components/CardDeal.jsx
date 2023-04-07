import React from 'react'
import {card} from "../public";
import styles, {layout} from "../public/styles";
import Button from "./Button";


const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-6xl`}>Find a better card deal <br className="sm:block hideen"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aperiam quod sunt libero expedita dolorem ipsam ex ad voluptatem quasi!</p>
      <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card.src} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    </section>
  )
}

export default CardDeal