import React from 'react'
// import logo from '../assets/img/logo.svg'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'
// import { Button } from '@smdn/core'

import Products from './features/Products'
import Contact from './features/Contact'

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
      <Contact />
    </div>
  )
}

App.propTypes = {}

export default App
