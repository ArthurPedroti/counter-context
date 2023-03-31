import { Component01 } from "./Component01"
import { Component02 } from "./Component02"
import { CounterContextProvider } from "./CounterContext"

 function App() {
    return (
      <CounterContextProvider>
        <Component01 />
        <Component02 />
      </CounterContextProvider>
  )
}

export default App
