import React, { useState, useEffect } from "react"
import './App.css';
//Importing Components
import Form from './components/Forms'
import TodoList from './components/TodoList'

function App() {
  //Create State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE: This will load state from memory if it exists
  useEffect(() => {
    //Load todos if they exist in local memory
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      setTodos(JSON.parse(localStorage.getItem((("todos")))));
    }
    //Load status if it exists in local memory
    if(localStorage.getItem("status") === null){
      localStorage.setItem("status", JSON.stringify("all"));
    }
    else{
      setStatus(JSON.parse(localStorage.getItem("status")));
    }
  }, []);
  //This block should execute upon any change to any todo state or change in status state
  useEffect(() => {
    //Changes which todos are displayed based on what dropdown option is selected
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
    //Saves all todos to local memory
    localStorage.setItem("todos", JSON.stringify(todos));
    //Saves status to local memory
    localStorage.setItem("status", JSON.stringify(status));
  }, [todos, status]);
  //The Following renders the web-app
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
        status={status}
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
