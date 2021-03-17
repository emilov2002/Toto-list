import React from 'react';
import Todo from "../todo";

const TodoList = ({todos, setTodos, filteredTodos, searchInputText}) => {
    const searchTodos = filteredTodos.filter((todo) => {
        return todo.todoName.includes(searchInputText)
    });
    return (
        <ul className=' list-group list group-flush mb-3'>
            {filteredTodos.length === 0 ? <li className='text-center border p-3' style={{background: '#fff'  , color : '#17a2b8'}}> No match todo</li> : searchTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        name={todo.todoName}
                        todos={todos}
                        setTodos={setTodos}
                        todoObj={todo}
                    />
                )
            )}
        </ul>
    );
};

export default TodoList;