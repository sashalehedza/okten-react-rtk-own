import { createAsyncThunk } from '@reduxjs/toolkit'

import { AxiosError } from 'axios'
import { userService } from '../../../services/api.service'

export const loadUsers = createAsyncThunk(
  'userSlice/loadUsers',
  async (_, thunkAPI) => {
    try {
      let response = await userService.getAll()
      return thunkAPI.fulfillWithValue(response)
    } catch (e) {
      let e1 = e as AxiosError
      return thunkAPI.rejectWithValue(e1)
    }
  }
)
