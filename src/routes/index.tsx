import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import Movies from './pages/Movies'
import DefaultLayout from './layouts/Default'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import SignIn from '@/routes/pages/SignIn'
import { requiresAuth } from './loaders/requiresAuth'
import { onlyGuset } from './loaders/onlyGuest'
const router = createBrowserRouter([
  //Route객체
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        loader: requiresAuth,
        element: <Movies />,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        loader: onlyGuset,
        element: <SignIn />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
