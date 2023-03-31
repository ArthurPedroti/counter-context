import { ReactNode, createContext, useState } from "react";

interface CounterContextProviderProps {
  children: ReactNode
}

interface CounterContextProps {
  counter: number
  setContextCounter: (counter: number) => void
}

export const CounterContext = createContext({} as CounterContextProps)

export function CounterContextProvider({ children }: CounterContextProviderProps) {
  const [counter, setCounter] = useState(0)

  function setContextCounter(counter: number) {
    setCounter(counter)
  }

  return (
    <CounterContext.Provider value={{ counter, setContextCounter }}>
      {children}
    </CounterContext.Provider>
  )
}