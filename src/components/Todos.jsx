import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/TodoSlice'

export default function Todos() {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = e => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className='todoContainer'>
            <h3 className='heading'>Todos Example Using Redux_Tookit</h3>
            <form onSubmit={addTodoHandler}>
                <input
                    className='input'
                    type='text'
                    placeholder='Enter todo..'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                /> <br />
                <button type='submit' className='btn'>Add ToDo</button>
            </form>
        </div>
    )
}
