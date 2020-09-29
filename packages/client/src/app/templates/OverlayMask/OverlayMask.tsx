import React from 'react'
import PropTypes from 'prop-types'
import styles from './OverlayMask.module.scss'

import { ReactComponent as Logo } from '../../../assets/img/logo.svg'

export interface IOverlayMask {}

const OverlayMask: React.FC<IOverlayMask> = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="1920px"
      height="1080px"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className={styles['hero-svg-overlay']}
      data-test="overlay-mask-component"
    >
      <defs>
        <mask id="masking" x="0" y="0" width="1920px" height="1080px">
          <rect className={styles['hero-svg-pane']} x="0" y="0" width="1920px" height="1080px" />
          <Logo className={styles['hero-svg-logo']} x="480" y="250" width="960px" height="590px" />
          {/* <text className="hero-svg-text hero-svg-text--main" x="960" y="600">Under Construction</text> */}
          <text className={styles['hero-svg-text']} x="960" y="660">
            Design Portfolio Samsoedien
          </text>
          <text className={styles['hero-svg-text--main']} x="960" y="760">
            The website is currently under maintenance. Contact me by sending a mail to contact@samsoedien.com
          </text>
          <text className={styles['hero-svg-text--copyright']} x="960" y="1032">
            &copy; {new Date().getFullYear()}, Samsoedien
          </text>
          <text className={styles['hero-svg-text--copyright']} x="960" y="1050">
            All rights reserved.
          </text>
          {/* <g className={styles['scroll-arrow-lines']}>
            <line x1="960" y1="710" x2="920" y2="697" />
            <line x1="960" y1="710" x2="1000" y2="697" />
          </g>
          <text className={styles['scroll-arrow-text']} x="960" y="725">
            Scroll down
          </text> */}
        </mask>
      </defs>
      <rect className={styles['hero-svg-pane-masking']} x="0" y="0" width="1920px" height="1080px" />
    </svg>
  )
}

OverlayMask.propTypes = {}

export default OverlayMask
