import { useContext } from 'react'
import { CountContext } from '../App'

const Child = () => {
  const count = useContext<number>(CountContext)
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default Child
