import { useMemo,memo } from "react"

const CounterChild = (props) => {
  const num = useMemo(() => {
    let num1 = 0
    for(let i = 0; i < 100000000; i++) {
      num1++
    }
    return num1
  }, [])
  
    console.log("renderized")
  return (
    <div style={{border:"thin solid white", margin:"1rem", padding:"1rem"}}>
      <h2>Counter Child</h2>
      <h3>{props.counter}</h3> 
      <button onClick={props.handleSum}>+</button>
      <button onClick={props.handleRest}>-</button>
      <h3>{num}</h3>
    </div>
  )
}

export default memo(CounterChild)    
