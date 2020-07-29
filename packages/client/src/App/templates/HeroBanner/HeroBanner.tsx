import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeroBanner.module.scss'

import Navbar from '../../components/Navbar'

export interface IHeroBannerProps {}

const HeroBanner: React.FC<IHeroBannerProps> = () => {
  return (
    <header className={styles['smdn-hero-banner']}>
      <Navbar />
    </header>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
