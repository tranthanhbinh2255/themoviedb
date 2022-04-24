import React from 'react'
import styles from './layout.module.scss'

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ title }) => (
  <>
    <div className={`${styles.layout} ui fluid container`}>{title}</div>
  </>
)

export default Layout
