import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeroBanner.module.scss'

import Navbar from '../../components/Navbar'
import OverlayMask from '../OverlayMask'
import BACKGROUND_IMAGE from '../../../assets/img/DSCF1582.jpg'

export interface IHeroBannerProps {}

const HeroBanner: React.FC<IHeroBannerProps> = () => {
  return (
    <header className="smdn-hero-banner">
      {/* <Navbar /> */}
      <div className={styles['hero-banner__image']} style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
        <OverlayMask />
      </div>
    </header>
  )
}

HeroBanner.propTypes = {}

export default HeroBanner
