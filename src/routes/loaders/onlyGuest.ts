import { redirect } from 'react-router'

export const onlyGuset = () => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return redirect('/')
  }
  return true
}
