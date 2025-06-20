import { useCountStore } from '../stores/count'

const Child = () => {
  const count = useCountStore(state => state.count)
  // const setCount = useCountStore(state => state.setCount)
  const increase = useCountStore(state => state.increase)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increase()
        }}>
        add
      </button>
    </>
  )
}

export default Child
