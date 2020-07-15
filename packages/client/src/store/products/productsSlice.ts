import { PayloadAction } from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'

import { IProduct } from '@smdn-project/shared'
import { createSlice } from '@reduxjs/toolkit'

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

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    create: (state, { payload }: PayloadAction<IProduct>) => {
      state.push(payload)
    },
    remove: (state, { payload }: PayloadAction<IProduct>) => {
      const index = state.findIndex((product) => product.id === payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const { create: createProductActionCreator, remove: removeProductActionCreator } = productsSlice.actions

export default productsSlice
