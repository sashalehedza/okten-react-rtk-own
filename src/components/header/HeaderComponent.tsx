import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
  return (
    <div className={styles.xxx}>
      <ul>
        <li>
          <NavLink to={'/'}>home</NavLink>
        </li>
        <li>
          <NavLink to={'/users'}>users</NavLink>
        </li>
        <li>
          <NavLink to={'/posts'}>posts</NavLink>
        </li>
      </ul>

      <hr />
    </div>
  )
}

export default HeaderComponent
