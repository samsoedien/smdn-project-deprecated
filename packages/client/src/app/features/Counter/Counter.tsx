import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {
  decrement,
  increment,
  incrementByThree,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../../store/reducers/counterSlice'

export interface ICounterProps {}

const Counter: React.FC<ICounterProps> = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
  return (
    <div className="container">
      <div className="row">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByThree())}>+3</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div className="row">
          <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
          <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
        </div>
      </div>
    </div>
  )
}

Counter.propTypes = {}

export default Counter
