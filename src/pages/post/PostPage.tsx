import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { postActions } from '../../redux/slices/postSlice'
import styles from './PostPage.module.css'

const PostPage = () => {
  const { posts, isLoaded } = useAppSelector((state) => state.postSlice)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(postActions.loadPosts())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.loading}>Loading in process....</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <div className={styles.postTitle}>{post.title}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default PostPage
