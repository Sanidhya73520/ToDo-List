import React from 'react'
import Todo2 from './Todo2'

function Todo({ todo ,delTodo}) {
    return (
        <div className='container'>
            {todo.map((Todo , index) => {
                return <>
                    <div className="todo">
                        <p>{Todo}</p>

                        <input type='checkbox'></input>
                        <button onClick={()=>delTodo(index)}>Delete</button>

                    </div>
                </>
            })}

        </div>
    )
}

export default Todo