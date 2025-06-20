import { redirect } from 'react-router'

export const requiresAuth = async ({ request }: { request: Request }) => {
  console.log(request)
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return redirect('/signin')
  } else {
    return true
  }
}
