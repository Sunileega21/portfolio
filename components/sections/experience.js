import React from 'react'
import styles from './experience.module.scss'

function Experience() {

    return (
        <>
            <div className={`${styles.section} w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`} id="work">
                <span className={styles.sectionTitle}>Experience</span>
                <div className={styles.algin}>
                    <div className={styles.companyBox}>
                        <div className={styles.companyName}>Clicbrics <span className={styles.sub}><sub>( Sep-2021 to Nov-2023 )</sub></span></div>
                        <div className={styles.companyDetails}>
                            <h4 className={styles.subHeading}>Company Overview:</h4>
                            <p>&emsp;Clicbrics, a leading real estate marketing company, facilitates property transactions across India.</p>
                            <br/>
                            <h4 className={styles.subHeading}>Role Highlights:</h4>
                            <ul>
                                <li>Designed and implemented user interface features for web pages using React Js and Next Js.</li>
                                <li>Ensured seamless cross-browser compatibility and conducted rigorous unit testing on components.</li>
                                <li>Developed reusable components for future projects, emphasizing performance optimization.</li>
                                <li>Collaborated with the SEO team to create an SEO-friendly site and optimized Google Search Console URLs.</li>
                            </ul>
                            <br/>
                            <h4 className={styles.subHeading}>Technical Expertise:</h4>
                            <ul>
                                <li>Worked with RESTful APIs and utilized Git version control tools like Github.</li>
                                <li>Adopted a mobile-first approach and showcased proficiency in Front End technologies (JavaScript, HTML, CSS).</li>
                                <li>Demonstrated expertise in ReactJS and UI libraries such as Bootstrap and Mui.</li>
                                <li>Translated intricate designs into meticulously architected HTML and CSS.</li>
                            </ul>
                            <br/>
                        </div>
                    </div>
                    <div className={styles.companyBox}>
                        <div className={styles.companyName}>Francium Tech<span className={styles.sub}><sub>( Nov-2023 to Present<sup>*</sup> )</sub></span></div>
                        <div className={styles.companyDetails}>
                        <h4 className={styles.subHeading}>Company Overview:</h4>
                            <p>&emsp;Francium Tech is a consulting company whose core purpose is to create technology solutions for progressive and forward-thinking organizations to empower their ascendancy and to magnify their impact.</p>
                            <br/>
                            <h4 className={styles.subHeading}>Role Highlights:</h4>
                            <ul>
                                <li>Designed and implemented user interface features for web pages using React Js and Next Js.</li>
                                <li>Ensured seamless cross-browser compatibility and conducted rigorous unit testing on components.</li>
                                <li>Developed reusable components for future projects, emphasizing performance optimization.</li>
                                <li>Collaborated with the SEO team to create an SEO-friendly site and optimized Google Search Console URLs.</li>
                            </ul>
                            <br/>
                            <h4 className={styles.subHeading}>Technical Expertise:</h4>
                            <ul>
                                <li>Worked with RESTful APIs and utilized Git version control tools like Github.</li>
                                <li>Adopted a mobile-first approach and showcased proficiency in Front End technologies (JavaScript, HTML, CSS).</li>
                                <li>Demonstrated expertise in ReactJS and UI libraries such as Bootstrap and Mui.</li>
                                <li>Translated intricate designs into meticulously architected HTML and CSS.</li>
                            </ul>
                            <p>&emsp;over here i have worked on AI integration to frontend and developed a site using wix studios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience