import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
