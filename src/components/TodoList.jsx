import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/TodoSlice'

export default function TodoList() {
    const todos = useSelector(state => state.todo.todos);
    console.log(todos)
    const dispatch = useDispatch()
  return (
    <div className='listContainer'>
      <h3>Todos List</h3>
      {
        todos.map((todo) => (
            <li key={todo.id} className='itemList'>
                {todo.text}
                <button
                className='toBtn'
                onClick={() => dispatch(removeTodo(todo.id))}
                >X</button>
            </li>
        ))
      }
    </div>
  )
}
