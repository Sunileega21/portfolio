import React, { useState } from 'react'
import styles from './contact.module.scss'

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState('');


    const handleSubmit = () => {

    }
  return (
    <div className={`${styles.section} w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
        <span className={styles.sectionTitle}>Contact</span>
        <div className={styles.align}>
            <div className={styles.leftBox}>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>Name:</div>
                    <div className={styles.inputBox}><input className={styles.inputCs} type='text' value={name} onChange={(e)=>setName(e.target.value)}/></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>Phone:</div>
                    <div className={styles.inputBox}><input className={styles.inputCs} type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}/></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>Email:</div>
                    <div className={styles.inputBox}><input className={styles.inputCs} type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.heading}>Message:</div>
                    <div className={styles.inputBox}><textarea className={styles.inputCsTextArea} type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/></div>
                </div>

                <div className={styles.submitButton} onClick={()=>{handleSubmit()}}>Submit</div>
            </div>
            <div className={styles.rightBox}>
                <div className={styles.earth}></div>
            </div>
        </div>
    </div>
  )
}

export default Contact