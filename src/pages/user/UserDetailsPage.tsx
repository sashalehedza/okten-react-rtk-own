import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { postActions } from '../../redux/slices/postSlice'
import styles from './UserDetailsPage.module.css'

const UserDetailsPage = () => {
  const { userId } = useParams<{ userId: string }>()
  const { posts, isLoaded } = useAppSelector((state) => state.postSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(postActions.loadPostsByUserId(Number(userId)))
    }
  }, [userId, dispatch])

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.loading}>Loading posts...</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postBody}>{post.body}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default UserDetailsPage
