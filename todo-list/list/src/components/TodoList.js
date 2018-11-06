import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const copyTodos = this.props.todos.slice();
    const array = copyTodos.map((item, index) => {
      let deleteFromTodo = () => {
        this.props.onDeleteTodo(index);
      };

      return (
        <div key={index}>
          <button onClick={deleteFromTodo}>X</button>
          {item}
        </div>
      );
    });

    return <div>{array}</div>;
  }
}

export default TodoList;
