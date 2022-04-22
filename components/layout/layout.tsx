import React from 'react'
import styles from './layout.module.scss'

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ title }) => {
  return <div className={styles.layout}>{title}</div>
}

export default Layout
