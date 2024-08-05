import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { userActions } from '../../redux/slices/userSlice'
import styles from './UserPage.module.css'

const UserPage = () => {
  const { users, isLoaded } = useAppSelector((state) => state.userSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.loadUsers())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.loading}>Loading users...</div>
      ) : (
        users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.userName}>
              <Link to={`/users/${user.id}/posts`}>{user.name}</Link>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default UserPage
