import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue('')
        }
    }
    
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' onChange={(e)=>setValue(e.target.value)} placeholder='What is the task today?'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
