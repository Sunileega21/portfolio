import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
function Navbar() {
  const [navbar, setNavbar] = useState(false)
  // Function to handle scrolling and update the navbar background color
  function handleScroll() {
    if(process.browser){
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  if(process.browser){
    window.addEventListener('scroll', handleScroll); 
  }
  return (
    <nav className={`${styles.sticky} ${navbar ? styles.scrolled : ''}`}>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-4 pb-4 '>
        <div className='flex items-center justify-between'>
          <div className='cursor-pointer text-3xl'>SE</div>
          <ul className='flex gap-5 cursor-pointer'>
            <li className='no-dots'>contact</li>
            <hr className={` cursor-default ${styles.navDash}`} />
            <li className='no-dots' onClick={() => scrollToSection('work')}>work</li>
            <hr className={` cursor-default ${styles.navDash}`} />
            <li className='no-dots'>about</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar