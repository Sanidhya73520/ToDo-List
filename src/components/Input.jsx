import React, { useState } from 'react'

function Input({inputval,writeTodo,addTodo}) {
    
    

    
  return (
    <div className='input-container'>
        <input type='text' onChange={writeTodo} value={inputval}></input>

        <button onClick={addTodo}>+</button>
      </div>
  )
}

export default Input