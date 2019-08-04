import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handldeDelete, handldeEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handldeDelete={() => handldeDelete(item.id)}
              handldeEdit={() => handldeEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
