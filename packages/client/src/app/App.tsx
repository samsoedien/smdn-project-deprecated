import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import { Button } from '@smdn/core'

import { IProduct, IPost } from '@smdn-project/common'
// import logo from '../assets/img/logo.svg'
// import PropTypes from 'prop-types'
import styles from './App.module.scss'
import Posts from './features/Posts'
import Products from './features/Products'
import Contact from './features/Contact'
import ContactFormik from './features/Contact/ContactFormik'

import HeroBanner from './templates/HeroBanner'

export interface IAppState {
  products: IProduct[]
  posts: IPost[]
}

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <div className={styles['App']}>
        <HeroBanner />
        <p className={styles['App__text']}>App</p>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={ContactFormik} />
        </Switch>
      </div>
    </Router>
  )
}

App.propTypes = {}

export default App
