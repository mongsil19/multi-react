import { create } from 'zustand'
import { combine, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
export const useCountStore = create(
  subscribeWithSelector(
    persist(
      immer(
        combine({ count: 0, double: 2 }, (set, get) => {
          return {
            setCount: (newCount: number) => {
              set({ count: newCount })
            },
            increase: () => {
              const { count } = get()
              set({ count: count + 1 })
            }
          }
        })
      ),
      {
        name: 'countStore',
        version: 2
      }
    )
  )
)

useCountStore.subscribe(
  state => {
    return state.count
  },
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
