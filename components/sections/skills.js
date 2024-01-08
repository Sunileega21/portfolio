import React from 'react'
import styles from './skills.module.scss'
function Skills() {
  return (
    <div className={`${styles.section} w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
        <span className={styles.sectionTitle}>Skills</span>
    </div>
  )
}

export default Skills