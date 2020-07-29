import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'

import LOGO from '../../../assets/img/logo.svg'
import { NavLink as Link } from 'react-router-dom'

export interface INavbarProps {}

const NavLink: React.FC = ({ children, ...props }) => (
  <a {...props} className={styles['smdn-navbar__list__item__link']}>
    {children}
  </a>
)

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className={styles['smdn-navbar']}>
      <h1 className={styles['smdn-navbar__brand']}>
        <a href="/" className={styles['smdn-navbar__brand__link']}>
          <img src={LOGO} alt="smdn-logo" className={styles['smdn-navbar__brand__link__site-logo']} />
        </a>
      </h1>

      <div className={styles['smdn-navbar--container']}>
        <ul className={styles['smdn-navbar__list']}>
          <li className={styles['smdn-navbar__list__item']}>
            {/* <a href="/">Home</a> */}
            <Link to="/" component={NavLink} activeClassName={styles['active']}>
              Home
            </Link>
          </li>
          <li className={styles['smdn-navbar__list__item']}>
            <Link to="/about" component={NavLink}>
              About
            </Link>
          </li>
          <li className={styles['smdn-navbar__list__item']}>
            <Link to="/pricing" component={NavLink}>
              Pricing
            </Link>
          </li>
          <li className={styles['smdn-navbar__list__item']}>
            <Link to="/blog" component={NavLink}>
              Blog
            </Link>
          </li>
          <li className={styles['smdn-navbar__list__item']}>
            <Link to="/contact" component={NavLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
