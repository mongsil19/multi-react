// import { useState } from 'react'
// import Button from '../../components/Button'
// import TextField from '../../components/TextField'

// export type Movies = Movie[]

// export interface Movie {
//   Title: string
//   Year: string
//   imdbID: string
//   Type: string
//   Poster: string
// }

// const Movies = () => {
//   const [searchText, setSearhText] = useState('')
//   const [movies, setMovies] = useState<Movies>([])
//   const [isLoading, setIsLoading] = useState(false)

//   async function fetchMovies() {
//     if (isLoading) return
//     if (searchText.trim().length < 3) {
//       alert('검색어를 3글자 이상 입력하세요')
//       setSearhText('')
//       return
//     }
//     try {
//       const res = await fetch(
//         `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
//       )
//       setIsLoading(true)
//       const { Search = [] } = await res.json()
//       setMovies(Search)
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message)
//       } else {
//         console.log(error)
//       }
//     } finally {
//       setIsLoading(false)
//     }
//   }
//   return (
//     <div className="flex max-w-[640px] flex-col gap-[20px]">
//       <div className="">
//         <div className="grid grid-cols-[1fr_120px] items-end gap-2">
//           <TextField
//             label="검색"
//             value={searchText}
//             onChange={e => setSearhText(e.target.value)}
//             onKeyDown={e => {
//               if (e.key == 'Enter') {
//                 fetchMovies()
//               }
//             }}
//           />
//           <Button
//             color="primary"
//             loading={isLoading}
//             onClick={fetchMovies}>
//             검색
//           </Button>
//         </div>
//         <div className="grid auto-rows-auto grid-cols-5 gap-[10px]">
//           {movies.map(movie => {
//             return (
//               <div key={movie.imdbID}>
//                 <div className="line-clamp-1">{movie.Title}</div>
//                 <div>
//                   <img
//                     src={movie.Poster}
//                     alt={movie.Title}
//                     width={100}
//                   />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Movies
