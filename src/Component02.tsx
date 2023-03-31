import { useContext } from "react"
import { CounterContext } from "./CounterContext"

export const Component02 = () => {
  const { counter, setContextCounter } = useContext(CounterContext)

  return (
    <div>
      <h1>Component 02</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setContextCounter(counter + 1)}>Add +1</button>
    </div>
  )
}