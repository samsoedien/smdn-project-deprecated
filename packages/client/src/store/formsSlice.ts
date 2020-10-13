import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
// import axios from 'axios'

import { IContactForm } from '@smdn-project/common'

interface IInitialState {
  entities: IContactForm[]
  isLoading: boolean
  errors: any
}

const initialState: IInitialState = {
  entities: [],
  isLoading: false,
  errors: {}
}

export const SubmitContactFormThunkActionCreator = createAsyncThunk(
  'forms/submitContactForm',
  async (formData: Partial<IContactForm>, thunkAPI) => {
  alert(JSON.stringify(formData, null, 2))
  return
  }
)

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: {
    [SubmitContactFormThunkActionCreator.pending as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = true
    },
    [SubmitContactFormThunkActionCreator.fulfilled as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = false
    },
    [SubmitContactFormThunkActionCreator.rejected as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = false
      state.errors = {message: 'Error from extrareducers'}
    },
  }
})

export default formsSlice.reducer