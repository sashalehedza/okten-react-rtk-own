import { createAsyncThunk } from '@reduxjs/toolkit'

import { AxiosError } from 'axios'
import { commentService } from '../../../services/api.service'

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
