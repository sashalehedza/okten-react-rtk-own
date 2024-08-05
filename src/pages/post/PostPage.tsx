import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { postActions } from '../../redux/slices/postSlice'
import { loadCommentsByPostId } from '../../redux/slices/commentSlice'
import styles from './PostPage.module.css'

const PostPage = () => {
  const { posts, isLoaded } = useAppSelector((state) => state.postSlice)
  const dispatch = useAppDispatch()
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
  const { comments, isCommentsLoaded } = useAppSelector(
    (state) => state.commentSlice
  )

  useEffect(() => {
    dispatch(postActions.loadPosts())
  }, [dispatch])

  useEffect(() => {
    if (selectedPostId !== null) {
      dispatch(loadCommentsByPostId(selectedPostId))
    }
  }, [selectedPostId, dispatch])

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.loading}>Loading posts...</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <button onClick={() => setSelectedPostId(post.id)}>
              Show Comments
            </button>
            {selectedPostId === post.id && (
              <div className={styles.commentsSection}>
                {!isCommentsLoaded ? (
                  <div className={styles.loading}>Loading comments...</div>
                ) : (
                  comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                      <div className={styles.commentName}>{comment.name}</div>
                      <div className={styles.commentBody}>{comment.body}</div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default PostPage
