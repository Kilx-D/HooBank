import React from 'react'
import {apple, bill, google} from "../public";
import styles, {layout} from "../public/styles";

const Billing = () => (
  <section className={layout.sectionReverse} id="product">
    <div className={layout.sectionImgReverse}>
      <img src={bill.src} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>

    <div className={layout.sectionInfo}>

      <h2 className={`${styles.heading2} text-6xl`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
     
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint harum tenetur, doloremque nemo quae neque reprehenderit quasi deserunt qui!</p>
   
    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">


      <img src={apple.src} alt="apple store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
      <img src={google.src} alt="google play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />

    </div>
   
    </div>
  </section>
)

export default Billing