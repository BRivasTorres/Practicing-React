import { memo } from "react"

const CounterChild = (props) => {
    console.log("renderized")
  return (
    <div style={{border:"thin solid white", margin:"1rem", padding:"1rem"}}>
      <h2>Counter Child</h2>
      <h3>{props.counter}</h3> 
      <button onClick={props.handleSum}>+</button>
      <button onClick={props.handleRest}>-</button>
    </div>
  )
}

export default memo(CounterChild)    
