import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 30px;
  /* width: 100%; */
  background-color: blue;
`

export interface IButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton>Button</StyledButton>
}

Button.propTypes = {}

export default Button
