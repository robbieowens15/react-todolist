import React from "react"

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, status })  => {
    //Updates the input-field state (thus display) upon keystrokes 
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
    //Creates a new todo state and clears text field upon add button pressed
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, { text: inputText, completed: false, id:Math.random()*1000 },
      ]);
      setInputText("");
    };
    //Updates the state of status based off what status the user selects from dropdown
    const statusHandler = (e) => {
      setStatus(e.target.value);
    };
    //Renders the form
    return(
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange= {statusHandler} name="todos" className="filter-todo">
          <option defaultValue={`${status==="completed" ? "" : ""}`} value="completed">Completed</option>
          <option defaultValue={`${status==="all" ? "" : ""}`} value="all">All</option>
          <option defaultValue={`${status==="uncompleted" ? "" : ""}`} value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;