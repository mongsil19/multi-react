import { useUserStore } from '@/stores/user'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/signin', label: 'SignIn', onlyGuset: true }
]

const Header = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
  }, [location])

  function signOut() {
    localStorage.removeItem('accessToken')
    setUser(null)
    navigate('/')
  }
  return (
    <header>
      <menu className="flex items-center justify-center gap-2 text-3xl font-bold">
        {navigations.map(x => {
          return (
            <NavLink
              to={x.to}
              style={{ display: x.onlyGuset && accessToken ? 'none' : 'block' }}
              className={({ isActive }) => {
                return isActive ? 'text-red-500' : ''
              }}>
              {x.label}
            </NavLink>
          )
        })}
      </menu>
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={signOut}>logout</button>
        </div>
      )}
    </header>
  )
}

export default Header
