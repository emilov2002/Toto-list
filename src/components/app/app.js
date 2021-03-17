import React, {useState, useEffect} from 'react';
import "./style.css";
import Header from "../header";
import Search from "../search";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setfilteredTodos] = useState([]);
    const [searchInputText, setSearchInputText] = useState('');
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todo')))
    },[]);
    useEffect(() => {
        filterHandler();
        saveTodos();
        Array.from(document.getElementsByClassName('statusBtn')).map((btn)=>{
           return  status === btn.value ? btn.classList.add('active') : btn.classList.remove('active')
        })
    }, [todos, status]);
    const saveTodos = ()=>{
     return   localStorage.setItem('todo', JSON.stringify(todos))
    };

    const filterHandler = () => {
        switch (status) {
            case 'active' :
                setfilteredTodos(todos.filter((todo) => todo.isActive));
                break;
            case 'done' :
                setfilteredTodos(todos.filter((todo) => !todo.isActive));
                break;
            default :
                setfilteredTodos(todos)
        }
    };
    return (
        <div className='app'>
            <div className='todo-container'>
                <Header todos={todos}/>
                <Search status={status} setStatus={setStatus} setSearchInputText={setSearchInputText}/>
                {todos ? todos.length === 0 ? <div className='text-center mb-3 border p-3'>Here should be your todos </div>: <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} searchInputText={searchInputText} />: setTodos([])}
                <AddTodo setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>

            </div>
        </div>
    );
};

export default App;