import {useState} from 'react'
import {close, menu, logo} from "../public";
import {navLinks} from "./constants";
// import logo from "../public/logo.svg"


const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo.src} alt="hoobank"
      className="w-[124px] h-[32px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        {navLinks.map((nav, i) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : "mr-10"} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    

    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img 
      className="w-[28px] h-[28px] object-contain"
      onClick={() => setToggle(prev => !prev)}
      src={toggle ? close.src : menu.src} alt="menu" />


      <div
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
         <ul className="list-none flex flex-col justify-end items-center flex-1">

{navLinks.map((nav, i) => (
  <li
  key={nav.id}
  className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mb-0' : "mb-10"} text-white`}
  >
    <a href={`#${nav.id}`}>
      {nav.title}
    </a>
  </li>
))}
</ul>

      </div>
    </div>
    </nav>
  )
}

export default Navbar