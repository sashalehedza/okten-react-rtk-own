import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { loadPosts } from '../../redux/slices/postSlice'
import styles from './PostPage.module.css'

const PostPage = () => {
  const posts = useAppSelector((state) => state.post.posts)
  const isPostLoaded = useAppSelector((state) => state.post.isLoaded)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {!isPostLoaded ? (
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
