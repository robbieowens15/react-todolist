import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Remove an item from list if deleted from state
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    //Show mark-through (completed CSS) if an item is marked as completed
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {
                        ...item, 
                        completed: !item.completed
                    };
                }
                return item;
        }));
    };
    //Renders a single todo
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
            <button onClick= {completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo