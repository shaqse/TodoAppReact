import React from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Finish homework', 'Wash dishes', 'Clean room', 'Make waffles'],
    };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== value),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
