import React, { useEffect } from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  const phoneNumber = '9741275595';
  const encodedMessage = encodeURIComponent('Hello Sunil!');
  const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;


  if (process.browser) {
    // The typewriter element
    var typeWriterElement = document.getElementById('typewriter');

    // The TextArray: 
    var textArray = ["Hey, I'm Sunil.", "I like JavaScript.", "So I became a FrontEnd Developer.", "and I Love to Develop Websites."];

    // You can also do this by transfering it through a data-attribute
    // var textArray = typeWriterElement.getAttribute('data-array');


    // function to generate the backspace effect 
    function delWriter(text, i, cb) {
      if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        // generate a random Number to emulate backspace hitting.
        var rndBack = 10 + Math.random() * 100;
        setTimeout(function () {
          delWriter(text, i, cb);
        }, rndBack);
      } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
      }
    };

    // function to generate the keyhitting effect
    function typeWriter(text, i, cb) {
      if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        // generate a random Number to emulate Typing on the Keyboard.
        var rndTyping = 250 - Math.random() * 100;
        setTimeout(function () {
          typeWriter(text, i++, cb)
        }, rndTyping);
      } else if (i === text.length + 1) {
        setTimeout(function () {
          delWriter(text, i, cb)
        }, 1000);
      }
    };

    // the main writer function
    function StartWriter(i) {
      if (typeof textArray[i] == "undefined") {
        setTimeout(function () {
          StartWriter(0)
        }, 1000);
      } else if (i < textArray[i].length + 1) {
        typeWriter(textArray[i], 0, function () {
          StartWriter(i + 1);
        });
      }
    };
    // wait one second then start the typewriter
    setTimeout(function () {
      StartWriter(0);
    }, 1000);
  }

  return (
    <>
      <div className={styles.section}>
        <div className='w-full flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='w-6/12'>
            <Image src={'/Images/developer.png'} className='mt-16' width={700} height={700} layout='intrinsic' priority alt="Hero Image" />
          </div>
          <div className='w-6/12'>
            <div className={`${styles.heroTyped} mt-20`}>
              <div className={styles.name}>
                <span id="typewriter" data-array=""></span>
                <span className={styles.cursor}></span>
              </div>
              {/* <p className={styles.para}>I am a <span class="typed-text"></span><span class="cursor blink">&nbsp;</span></p> */}
              {/* <TypingEffect strings={textArray} speed={400}/> */}
            </div>
            <div className={`${styles.text}`}>
              I am a passionate and skilled Frontend Developer with expertise in creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver outstanding user experiences by combining technical proficiency with a keen eye for design.
            </div>
            <div className='flex items-center	justify-center gap-4 mt-5'>
              <Link href={'https://github.com/Sunileega21'} target='_blank'><Image src={'https://cdn.cdnlogo.com/logos/g/60/github-icon.svg'} layout='intrinsic' width={50} height={50} /></Link>
              <Link href={'https://www.instagram.com/sunil_eega/'} target='_blank'><Image src={'https://www.cdnlogo.com/logos/i/92/instagram.svg'} layout='intrinsic' width={35} height={35} /></Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer"><Image src={'https://www.cdnlogo.com/logos/w/91/whatsapp.svg'} layout='intrinsic' width={50} height={50} /></Link>
              <Link href={'https://www.linkedin.com/in/sunil-eega/'} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" /><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05" /><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07" /><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z" /></svg></Link>
              {/* <span className={styles.svgDimensions} onClick={() => {downloadResume()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48px" height="48px"><path d="M179.503 21.333h225.83A42.667 42.667 0 0 1 448 64v384a42.667 42.667 0 0 1-42.667 42.667H106.667A42.667 42.667 0 0 1 64 448V136.837a21.333 21.333 0 0 1 6.248-15.085l94.17-94.17a21.333 21.333 0 0 1 15.085-6.249z" fill="#ccd4ff"/><rect x="85.333" y="149.333" width="149.333" height="64" rx="32" ry="32" fill="#a4b1ff"/><path d="M213.333 51.503v88.994a30.17 30.17 0 0 1-30.17 30.17H94.17A30.17 30.17 0 0 1 64 140.497a30.17 30.17 0 0 1 8.837-21.334L161.83 30.17a30.17 30.17 0 0 1 21.333-8.837 30.17 30.17 0 0 1 30.17 30.17z" fill="#dfe5ff"/><rect x="69.49" y="80.915" width="138.353" height="30.17" rx="15.085" ry="15.085" transform="rotate(-45 138.667 96)" fill="#eff2ff"/><rect x="234.667" y="85.333" width="149.333" height="170.667" rx="21.333" ry="21.333" fill="#005eee"/><path d="M170.667 426.667h-21.334a21.333 21.333 0 0 1 0-42.667h21.334a21.333 21.333 0 0 1 0 42.667zM362.667 426.667H256A21.333 21.333 0 0 1 256 384h106.667a21.333 21.333 0 0 1 0 42.667zM362.667 341.333H149.333a21.333 21.333 0 1 1 0-42.666h213.334a21.333 21.333 0 1 1 0 42.666z" fill="#163969"/><circle cx="309.333" cy="138.667" r="32" fill="gold"/><path d="M341.333 192h-64a21.333 21.333 0 0 0 0 42.667h64a21.333 21.333 0 1 0 0-42.667z" fill="gold"/><rect x="256" y="256" width="106.667" height="21.333" rx="10.667" ry="10.667" fill="#a4b1ff"/></svg></span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero