import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { userService } from '../../services/api.service'
import { AxiosError } from 'axios'

type UserSliceType = {
  users: IUser[]
  isLoaded: boolean
}

const initialState: UserSliceType = {
  users: [],
  isLoaded: false,
}

export const loadUsers = createAsyncThunk(
  'user/loadUsers',
  async (_, thunkAPI) => {
    try {
      const response = await userService.getAll()
      return response
    } catch (e) {
      const error = e as AxiosError
      return thunkAPI.rejectWithValue(error)
    }
  }
)

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
