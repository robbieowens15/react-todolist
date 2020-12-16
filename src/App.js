import React, { useState, useEffect } from "react"
import './App.css';
//Importing Components
import Form from './components/Forms'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      setTodos(JSON.parse(localStorage.getItem((("todos")))));
    }
  }, []);
  useEffect(() => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;  
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);
  return (
    <div className="App">
      <header>
        <h1>Robbie's Todo List</h1>
      </header>
      <Form
        todos={todos} 
        setTodos={setTodos}
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
