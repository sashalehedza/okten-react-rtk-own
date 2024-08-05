import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IPost } from '../../models/IPost'
import { postService } from '../../services/api.service'
import { AxiosError } from 'axios'

type PostSliceType = {
  posts: IPost[]
  isLoaded: boolean
}

const initialState: PostSliceType = {
  posts: [],
  isLoaded: false,
}

export const loadPosts = createAsyncThunk(
  'post/loadPosts',
  async (_, thunkAPI) => {
    try {
      const response = await postService.getAll()
      return response
    } catch (e) {
      const error = e as AxiosError
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.isLoaded = true
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoaded = true
      })
  },
})

export default postSlice
