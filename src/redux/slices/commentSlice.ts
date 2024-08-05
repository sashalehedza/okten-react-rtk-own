import { createSlice } from '@reduxjs/toolkit'
import { IComment } from '../../models/IComment'
import {
  loadComments,
  loadCommentsByPostId,
} from '../reducers/users/comments.extra.reducers'

type CommentSliceType = {
  comments: IComment[]
  isLoaded: boolean
  isCommentsLoaded: boolean
}

const commentInitState: CommentSliceType = {
  comments: [],
  isLoaded: false,
  isCommentsLoaded: false,
}

export const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: commentInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload
        state.isLoaded = true
      })
      .addCase(loadComments.rejected, (state) => {})
      .addCase(loadCommentsByPostId.pending, (state) => {
        state.isCommentsLoaded = false
      })
      .addCase(loadCommentsByPostId.fulfilled, (state, action) => {
        state.comments = action.payload
        state.isCommentsLoaded = true
      })
      .addCase(loadCommentsByPostId.rejected, (state) => {})
  },
})

export const commentActions = {
  ...commentSlice.actions,
  loadComments,
  loadCommentsByPostId,
}
