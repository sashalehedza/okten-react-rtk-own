import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { loadUsers } from '../reducers/users/user.extra.reducers'

type UserSliceType = {
  users: IUser[]
  isLoaded: boolean
}

const initialState: UserSliceType = {
  users: [],
  isLoaded: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoaded = true
      })
      .addCase(loadUsers.rejected, (state) => {
        state.isLoaded = true
      })
  },
})

export default userSlice
