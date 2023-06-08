import {useCallback, useState } from "react"
import CounterChild from "./CounterChild"
const Counter = () => {
    const [count, setCount] = useState(0)    
    const [input, setInput] = useState("")
    
    const handleSum = useCallback(() => setCount(count + 1), [count])
    const handleRest = useCallback(() => setCount(count - 1), [count])
    
    const handleChange = () => ((e) => setInput(e.target.value))
    
  return (
    <div>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button onClick={handleSum}>+</button>
      <button onClick={handleRest}>-</button>
      
      <input type="text" onChange={handleChange} value={input}/>
      
      <CounterChild counter={count} sum={handleSum} rest={handleRest} />
    </div>
  )
}

export default Counter
