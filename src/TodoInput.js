import React, { Component } from 'react';

// [TODO App]
// - todoを入力するだけのコンポーネント
class TodoInput extends Component {
  render() {

    return(
      <div>
        <input type="text" placeholder="新規TODOを入力してください" />
        <button>登録</button>
      </div>
    )
  }
}

export default TodoInput;