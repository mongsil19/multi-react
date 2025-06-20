import useMovieStore from '@/stores/movie'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { Link, useOutlet } from 'react-router'
const Movies = () => {
  const searchText = useMovieStore(state => state.searchText)
  const isLoading = useMovieStore(state => state.isLoading)
  const movies = useMovieStore(state => state.movies)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const outlet = useOutlet()
  return (
    <div className="flex max-w-[640px] flex-col gap-[20px]">
      <div className="">
        <div className="grid grid-cols-[1fr_120px] items-end gap-2">
          <TextField
            label="검색"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            onKeyDown={e => {
              if (e.key == 'Enter') {
                fetchMovies()
              }
            }}
          />
          <Button
            color="primary"
            loading={isLoading}
            onClick={fetchMovies}>
            검색
          </Button>
        </div>
        <div className="grid auto-rows-auto grid-cols-5 gap-[10px]">
          {movies.map(movie => {
            return (
              <Link
                to={`/movies/${movie.imdbID}`}
                key={movie.imdbID}>
                <div className="line-clamp-1">{movie.Title}</div>
                <div>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    width={100}
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="absolute z-20 bg-amber-200">{outlet}</div>
    </div>
  )
}

export default Movies
