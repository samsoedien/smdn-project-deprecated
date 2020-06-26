import React from 'react'
// import logo from '../logo.svg'
import PropTypes from 'prop-types'
import styles from './App.module.scss'

// import { Button } from '@smdn/core'
// import Chat from './applications/chat'

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return <div className={styles['app']}>App</div>
}

App.propTypes = {}

export default App
