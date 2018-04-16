import React, { Component } from 'react';

// [TODO App]
// - todoを入力するだけのコンポーネント
class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.prependDefault(); // Eventオブジェクトを引数で受け取れる
    this.props.addTodo('新規Todo');
  }

  render() {

    return(
      <div>
        <input type="text" placeholder="新規TODOを入力してください" />
        <button onClick={this.handleClick}>登録</button>
      </div>
    )
  }
}

export default TodoInput;