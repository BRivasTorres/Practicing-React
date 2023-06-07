import { memo } from "react"

const CounterChild = () => {
    console.log("renderized")
  return (
    <div style={{border:"thin solid white", margin:"1rem", padding:"1rem"}}>
      <h2>Counter Child</h2>
    </div>
  )
}

export default memo(CounterChild)
