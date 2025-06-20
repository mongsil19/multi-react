import { create } from 'zustand'
import { combine, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  persist(
    immer(
      combine(
        {
          user: {
            name: 'Neo',
            age: 22,
            address: {
              city: 'Seoul',
              emails: ['Net@gmail.com', 'Neo@naver.com']
            }
          }
        },
        set => ({
          setName: (newName: string) => {
            set(state => {
              state.user.name = newName
            })
            //   const { user } = get()
            //   set({
            //     user: {
            //       ...user,
            //       name: newName
            //     }
            //   })
          },
          setFirstEmail: (newEmail: string) => {
            //   const { user } = get()
            set(state => {
              state.user.address.emails[0] = newEmail
            })
          }
        })
      )
    ),
    {
      name: 'userStore'
    }
  )
)
