import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../models/IPost'
import { loadPosts } from '../reducers/users/post.extra.reducers'

type PostSliceType = {
  posts: IPost[]
  isLoaded: boolean
}

const initialState: PostSliceType = {
  posts: [],
  isLoaded: false,
}

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
