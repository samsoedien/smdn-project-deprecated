import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProduct } from '@smdn-project/shared'

interface IProductState {
  products: IProduct[]
  loading: boolean
  error: string | null
}

const productsInitialState: IProductState = {
  products: [],
  loading: false,
  error: null,
}

// const thunkFunction = (): AppThunk => async (dispatch) => {
//   try {
//     const res = await axios.get('/https://jsonplaceholder.typicode.com/todos/1')
//     dispatch(getProductsSuccess())
//   } catch {
//     dispatch(getProductsFailed())
//   }
// }

export const getProductByIdThunkActionCreator = createAsyncThunk('products/fetchProductById', async (id, thunkAPI) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    create: (state, { payload }: PayloadAction<IProduct>) => {
      state.products.push(payload)
    },
    edit: (state, { payload }: PayloadAction<IProduct>) => {
      let product = state.products.find((product) => product.id === payload.id)
      if (product) product = payload
    },
    remove: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.products.findIndex((product) => product.id === payload.id)
      if (index !== -1) {
        state.products.splice(index, 1)
      }
    },
  },
  extraReducers: {
    [getProductByIdThunkActionCreator.fulfilled as any]: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload)
    },
  },
})

export const {
  create: createProductActionCreator,
  edit: editProductActionCreator,
  remove: removeProductActionCreator,
} = productsSlice.actions

export default productsSlice.reducer
