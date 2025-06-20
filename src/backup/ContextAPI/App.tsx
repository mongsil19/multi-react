import Parent from './components/Parent'
import { createContext, useState } from 'react'

export const CountContext = createContext(0)

const App = () => {
  // let count = 7
  const [count, setCount] = useState(7)
  return (
    <>
      <CountContext value={count}>
        <Parent />
      </CountContext>

      <button
        onClick={() => {
          {
            setCount(count + 1)
          }
        }}>
        add
      </button>
    </>
  )
}
export default App
