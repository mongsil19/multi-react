import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { delay } from '@/utils'
export type Movies = Movie[]
export interface Movie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

const App = () => {
  const [movies, setMovies] = useState<Movies>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    await delay()
    const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=avengers')
    const { Search } = await res.json()
    setMovies(Search)
    setIsLoading(false)
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(x => {
            return <li key={x.imdbID}>{x.Title}</li>
          })}
        </ul>
      )}
    </>
  )
}

export default App
