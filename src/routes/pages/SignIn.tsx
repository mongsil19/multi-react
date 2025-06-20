import { useState } from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { delay } from '@/utils'
import { useNavigate } from 'react-router'
import { useUserStore } from '@/stores/user'
const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const setUser = useUserStore(state => state.setUser)
  // const user = useUserStore(state => state.user)

  async function signIn() {
    if (isLoading) return
    setIsLoading(true)
    //서버에 요청
    await delay(1500)
    if (email && password) {
      const accessToken = '1234qqqq'
      localStorage.setItem('accessToken', accessToken)
      setUser({ email })
      navigate('/')
    }
    setIsLoading(false)
  }
  return (
    <div className="flex max-w-[500px] flex-col gap-[10px]">
      <TextField
        type="text"
        label="Eamil"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="이메일을 입력하세요"
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="비밀번호 입력하세요"
        hint="비밀번호는 8자 이상 작성해야 합니다"
      />
      <Button
        color="primary"
        loading={isLoading}
        onClick={signIn}>
        로그인
      </Button>
    </div>
  )
}

export default App
