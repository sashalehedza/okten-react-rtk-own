import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <NavLink to={'/'} className={styles.navItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/users'} className={styles.navItem}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={'/posts'} className={styles.navItem}>
            Posts
          </NavLink>
        </li>
      </ul>
      <hr className={styles.hr} />
    </div>
  )
}

export default HeaderComponent
