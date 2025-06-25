import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import { useTodoStore } from '@/stores/todo'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  //   const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const onEditMode = () => {
    setIsEditing(true)
  }
  const offEditMode = (title: string = todo.title) => {
    setIsEditing(false)
    setTitle(title)
  }

  const onSave = async () => {
    // if (isLoading) return
    // if (title.trim()) return
    // if (title === todo.title) return
    // setIsLoading(true)
    await updateTodo({ ...todo, title })
    offEditMode(title)
  }

  const onDelete = async () => {
    await deleteTodo(todo)
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])
  return (
    <li className="mt-2">
      {isEditing ? (
        <div className="grid grid-cols-[1fr_50px_50px_50px] items-end gap-2">
          <TextField
            ref={inputRef}
            label="할 일 수정"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') {
                offEditMode()
              }
            }}
          />
          <Button
            onClick={() => {
              offEditMode()
            }}>
            취소
          </Button>
          <Button
            color="primary"
            // loading={isLoading}
            onClick={onSave}>
            저장
          </Button>
          <Button
            color="danger"
            onClick={onDelete}>
            삭제
          </Button>
        </div>
      ) : (
        <div className="flex">
          <h3 className="max-w-[500px] min-w-[400px]">{todo.title}</h3>
          <Button
            color="primary"
            onClick={onEditMode}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}

export default TodoItem
