import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    //Renders the list of todos
    return (
        <div className="todo-container">
            <ul className="todo-list">
                //chooses which todos are rendered based on status state
                { filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo} 
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;