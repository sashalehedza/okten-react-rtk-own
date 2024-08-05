import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { IComment } from '../../models/IComment'
import { commentService } from '../../services/api.service'

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

export const loadComments = createAsyncThunk(
  'commentSlice/loadComments',
  async (_, thunkAPI) => {
    try {
      let response = await commentService.getAll()
      return thunkAPI.fulfillWithValue(response)
    } catch (e) {
      let e1 = e as AxiosError
      return thunkAPI.rejectWithValue(e1)
    }
  }
)

export const loadCommentsByPostId = createAsyncThunk(
  'commentSlice/loadCommentsByPostId',
  async (postId: number, thunkAPI) => {
    try {
      let response = await commentService.getByPostId(postId)
      return thunkAPI.fulfillWithValue(response)
    } catch (e) {
      let e1 = e as AxiosError
      return thunkAPI.rejectWithValue(e1)
    }
  }
)

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
