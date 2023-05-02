import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: '',
      editedValue:''
    };
  }

  handleChange = (val) => {
    this.setState({ newTodo: val.target.value });
  }

  handleEditChange = (e) => {
    this.setState({editedValue: e.target.value})
  }

  handleChange = (val) => {
    this.setState({ newTodo: val.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: this.state.newTodo.trim(),
      completed: false
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      newTodo: ''
    }));
  }

  handleToggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  }

  handleEditTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: id} : todo
      ),
    }));
  }
  

  handleDeleteTodo = (id) => {
    // [...todo.filter((todo)=> todo.id !== id)]
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id)
    }));
  }

  handleAdd = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, text: this.state.editedValue, isEdit:'' } : todo
      ),
    }));
  }

  render() {
    const { todos, newTodo } = this.state;
  console.log(this.state)

    return (
      <div>
        <h1>Todo List</h1>
       <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <button type="submit">Add</button>
        </form>
       
        <ul>
          {todos.map((todo) => (
        
            <li className="listitem" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.handleToggleComplete(todo.id)}
                />
                <h3 style={{color:'white'}}>{todo?.isEdit ? <input style={{width:"300px"}} type='text' onChange={this.handleEditChange} /> : todo.text}</h3>
              
              {!todo.isEdit ? 
              (
                
                <>
              <button style={{marginLeft:'50px'}} onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
              <button style ={{marginLeft:"20px"}} onClick={() => this.handleEditTodo(todo.id)}>Edit</button>
              </>
              ):              <button style ={{marginLeft:"20px"}} onClick={() => this.handleAdd(todo.id)}>Edit</button>

              }
            </li>
            
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;