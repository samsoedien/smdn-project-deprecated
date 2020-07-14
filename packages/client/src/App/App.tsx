import React from 'react'
// import logo from '../logo.svg'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'
import { Provider } from 'react-redux'

import store from '../store/store'
// import { Button } from '@smdn/core'
// import Chat from './applications/chat'
import Counter from './features/Counter'
import Todo from './features/Todo'
import ProductList from './features/products/ProductList'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <Provider store={store}>
      <div className={styles['App']}>
        <p className={styles['App__text']}>App</p>
        {/* <Chat /> */}
        {/* <Todo /> */}
        <ProductList />
      </div>
    </Provider>
  )
}

App.propTypes = {}

export default App
