import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'

import { IProduct } from '@smdn-project/shared'

interface IProductState {
  products: IProduct[]
  loading: boolean
  errors: object
}

const initialState: IProductState = {
  products: [],
  loading: false,
  errors: {},
}

const products: IProduct[] = [
  {
    id: uuid(),
    name: 'product name',
  },
  {
    id: uuid(),
    name: 'hi there',
  },
]

const getProductById = createAsyncThunk('api/v1/products/:id', () => {})

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    create: (state, { payload }: PayloadAction<IProduct>) => {
      state.push(payload)
    },
    edit: (state, { payload }: PayloadAction<IProduct>) => {
      let product = state.find((product) => product.id === payload.id)
      if (product) product = payload
    },
    remove: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.findIndex((product) => product.id === payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const {
  create: createProductActionCreator,
  edit: editProductActionCreator,
  remove: removeProductActionCreator,
} = productsSlice.actions

export default productsSlice.reducer
