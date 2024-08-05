import React, { useEffect } from 'react'
import './App.css'

import { useAppDispatch, useAppSelector } from './redux/store'
import { userActions } from './redux/slices/userSlice'
import { postActions } from './redux/slices/postSlice'

const App = () => {
  let {
    userSlice: { users, isLoaded: isUserLoaded },
    postSlice: { posts, isLoaded: isPostLoaded },
  } = useAppSelector((state) => state)

  let dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.loadUsers())
    dispatch(postActions.loadPosts())
  }, [])

  return (
    <div>
      {!isUserLoaded && <div>Loading in process....</div>}

      {users.map((user) => (
        <div>{user.name}</div>
      ))}

      {!isPostLoaded && <div>Loading in process....</div>}
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
}

export default App
