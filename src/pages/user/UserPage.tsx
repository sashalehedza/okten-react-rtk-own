import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { userActions } from '../../redux/slices/userSlice'
import styles from './UserPage.module.css'

const UserPage = () => {
  const {
    userSlice: { users, isLoaded: isUserLoaded },
  } = useAppSelector((state) => state)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.loadUsers())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {!isUserLoaded ? (
        <div className={styles.loading}>Loading in process....</div>
      ) : (
        users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.userName}>{user.name}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default UserPage