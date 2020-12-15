import React, { useState } from 'react'

//useCounter hook
const useCounter = () => {
  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }
  const decrease = () => {
    setValue(value - 1)
  }
  const zero = () => {
    setValue(0)
  }

  return {
    value,
    increase,
    decrease,
    zero
  }
}

// with hooks
const App = (props) => {
  const leftCounter = useCounter()
  const rightCounter = useCounter()

  return (
    <div>
      
      {/* left values */}
      <div>{leftCounter.value}</div>
      <button onClick={leftCounter.increase}>
        Add 1 to Left
      </button>
      <button onClick={leftCounter.decrease}>
        Subtract 1 to Left
      </button>
      <button onClick={leftCounter.zero}>
        Set left to zero
      </button>
      
      {/* right values */}
      <button onClick={rightCounter.increase}>
        Add 1 to Right
      </button>
      <button onClick={rightCounter.decrease}>
        Subtracct 1 to Right
      </button>
      <button onClick={rightCounter.zero}>
        Set right to zero
      </button>
    </div>
  )
}



// without hooks
const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {/* left values */}
      <div>{left}</div>
      <button onClick={() => setLeft(left + 1)}>
        Add 1 to Left
      </button>
      <button onClick={() => setLeft(left - 1)}>
        Subtract 1 to Left
      </button>
      <button onClick={() => setLeft(0)}>
        Set left to zero
      </button>

      {/* right values */}
      <div>{right}</div>
      <button onClick={() => setRight(right + 1)}>
        Add 1 to Right
      </button>
      <button onClick={() => setRight(right - 1)}>
        Subtract 1 to Right
      </button>
      <button onClick={() => setRight(0)}>
        Set right to zero
      </button>

    </div>
  )
}