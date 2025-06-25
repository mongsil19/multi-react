import TodoCreator from '@/components/Todos/TodoCreator'
import TodoList from '@/components/Todos/TodoList'
import React from 'react'

const Todos = () => {
  return (
    <div className="mx-auto max-w-[500px] flex-col">
      <TodoCreator />
      <TodoList />
    </div>
  )
}

export default Todos
