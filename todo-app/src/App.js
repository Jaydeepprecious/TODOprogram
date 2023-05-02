import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';
import { Component } from 'react';
class App extends Component {
  render(){
  return (
    <div className="App">
      <TodoList/>
    </div>
  );}
}

export default App;
