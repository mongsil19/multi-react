import { useTodoStore } from '@/stores/todo'
import Button from '../Button'
import TextField from '../TextField'
import { useState } from 'react'

const TodoCreator = () => {
  const createTodo = useTodoStore(state => state.createTodo)
  const [title, setTitle] = useState('')
  return (
    <div className="grid grid-cols-[1fr_120px] items-end gap-2">
      <TextField
        label="할일추가"
        value={title}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            createTodo(title)
          }
        }}
        onChange={e => setTitle(e.target.value)}
      />
      <Button
        color="primary"
        onClick={() => createTodo(title)}>
        추가
      </Button>
    </div>
  )
}

export default TodoCreator
