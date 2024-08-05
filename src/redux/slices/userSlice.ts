import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { loadUsers } from '../reducers/users/user.extra.reducers'

type UserSliceType = {
  users: IUser[]
  isLoaded: boolean
}

const userInitState: UserSliceType = {
  users: [],
  isLoaded: false,
}

export const userSlice = createSlice({
  name: 'usersSlice',
  initialState: userInitState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoaded = true
      })
      .addCase(loadUsers.rejected, (state, action) => {}),
})

export const userActions = {
  ...userSlice.actions,
  loadUsers,
}
