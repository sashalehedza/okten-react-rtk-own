import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { commentActions } from '../../redux/slices/commentSlice'
import styles from './CommentsPage.module.css'

const CommentsPage = () => {
  const { comments, isLoaded } = useAppSelector((state) => state.commentSlice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(commentActions.loadComments())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.loading}>Loading comments...</div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentName}>{comment.name}</div>
            <div>{comment.body}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentsPage
