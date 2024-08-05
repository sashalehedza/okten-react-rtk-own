import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'

import { postActions } from '../redux/slices/postSlice'

const PostPage = () => {
  let {
    postSlice: { posts, isLoaded: isPostLoaded },
  } = useAppSelector((state) => state)

  let dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(postActions.loadPosts())
  }, [])

  return (
    <div>
      {!isPostLoaded && <div>Loading in process....</div>}
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  )
}

export default PostPage
