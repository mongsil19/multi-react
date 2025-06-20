import { Link } from 'react-router'

const NotFound = () => {
  return (
    <>
      <h1>404 페이지를 찾을 수 없습니다</h1>
      <Link to="/">홈으로</Link>
    </>
  )
}

export default NotFound
