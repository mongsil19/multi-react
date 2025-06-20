import Loader from '@/components/Loader'
import useMovieStore from '@/stores/movie'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Modal from '@/components/Modal'

const MovieDetails = () => {
  const movie = useMovieStore(state => state.currrentMovie)
  const isLoading = useMovieStore(state => state.isLoadingForMD)
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const { movieId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [])
  return (
    <Modal onClose={() => navigate('/movies')}>
      {isLoading ? (
        <Loader />
      ) : (
        movie && (
          <div className="mx-auto flex max-w-[1100px] gap-[70px] rounded-2xl">
            <div className="w-[350px] shrink-0">
              <img
                src={movie.Poster.replace('SX300', 'SX1000')}
                alt={movie.Title}
                width={350}
              />
            </div>
            <div className="grow-1">
              <h1 className="text-[50px] font-bold">{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <Info
                title="Rating"
                value={movie.Ratings.map(rating => {
                  return (
                    <p key={rating.Source}>
                      {rating.Source} - {rating.Value}
                    </p>
                  )
                })}
              />
              <Info
                title="Actors"
                value={movie.Actors}
              />
              <Info
                title="Directors"
                value={movie.Director}
              />
              <Info
                title="Genre"
                value={movie.Genre}
              />
            </div>
          </div>
        )
      )}
    </Modal>
  )
}

function Info({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="mt-[20px]">
      <h3 className="text-[20px] font-bold">{title}</h3>
      <p>{value}</p>
    </div>
  )
}
export default MovieDetails
