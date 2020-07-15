import React from 'react'
// import logo from '../assets/img/logo.svg'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'
import { Provider, useSelector } from 'react-redux'
// import { Button } from '@smdn/core'

import store, { RootState } from '../store/store'
import Products from './features/Products'

import { IProduct } from '@smdn-project/shared'

export interface IAppState {
  products: IProduct[]
}

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <div className={styles['App']}>
      <p className={styles['App__text']}>App</p>
      {/* <Chat /> */}
      {/* <Todo /> */}
      <Products />
    </div>
  )
}

App.propTypes = {}

export default App
