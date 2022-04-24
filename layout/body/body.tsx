import React from 'react'
import styles from './body.module.scss'

const Body: React.FC<{ children }> = ({ children }) => (
  <main>
    <div className={`${styles.layout} ui fluid container`}>{children}</div>
  </main>
)
export default Body
