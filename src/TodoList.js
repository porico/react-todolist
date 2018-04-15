import React, { Component } from 'react';
import TodoItem from './TodoItem';

// [TODO App]
// - task内の各todoをTodeItemコンポーネントを用いてエレメントにする
// list変数にはTodoItemエレメントの配列が入る

class TodoList extends Component {
  render() {
    const list = this.props.tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} />;
    });

    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default TodoList;