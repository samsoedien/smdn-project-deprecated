import React from 'react'
import PropTypes from 'prop-types'

import HeroBanner from '../HeroBanner'

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="smdn-header" data-test="header-component">
      <HeroBanner />
    </header>
  )
}

Header.propTypes = {}

export default Header
