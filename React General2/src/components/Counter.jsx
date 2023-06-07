import { useState } from "react"
import CounterChild from "./CounterChild"
const Counter = () => {
    const [count, setCount] = useState(0)    
    
    const handleSum = () => (setCount(prevCount => prevCount + 1))
    
    const handleRest = () => (setCount(prevCount => prevCount - 1))
    
  return (
    <div>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button onClick={handleSum}>+</button>
      <button onClick={handleRest}>-</button>
      <CounterChild />
    </div>
  )
}

export default Counter
