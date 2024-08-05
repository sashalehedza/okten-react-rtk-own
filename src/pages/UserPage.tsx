import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { userActions } from '../redux/slices/userSlice'

const UserPage = () => {
  let {
    userSlice: { users, isLoaded: isUserLoaded },
  } = useAppSelector((state) => state)

  let dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.loadUsers())
  }, [])

  return (
    <div>
      {!isUserLoaded && <div>Loading in process....</div>}

      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  )
}

export default UserPage
