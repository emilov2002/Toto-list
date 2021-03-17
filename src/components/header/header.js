import React from 'react';

const Header = ({todos, }) => {
    // const moreTodo = ()=>{
    //     let moreTodo = 0;
    //     let doneTodo = 0;
    //     todos.map((el)=>{
    //         el.isActive ? moreTodo += 1 : doneTodo += 1;
    //     });
    //     return moreTodo
    // };
    // const doneTodo = ()=>{
    //     let moreTodo = 0;
    //     let doneTodo = 0;
    //     todos.map((el)=>{
    //         el.isActive ? moreTodo += 1 : doneTodo += 1;
    //     });
    //     return doneTodo
    // };
    return (
        <header className='header'>

            <h1 className='header__title'>Todo list</h1>
            <div className="header__status-bar">
                { todos ? todos.filter(el => el.isActive).length : 0} more to do,{todos ? todos.filter(el => !el.isActive).length : 0}  done
            </div>
        </header>
    );
};

export default Header;