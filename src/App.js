import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// [TODO App]
// - stateとイベントハンドリング
class App extends Component {
  // constractorで初期値を設定する
  // このときのみ、this.stateに直接値を入れる
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'デフォルト todo', id: 0 },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this); //addTodoメソッドでthisを矯正し、適切にstateを変更するためのコード
  }

  // 新規todoを追加するメソッド
  // 引数：todoのタイトル
  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    // pushはもとの配列操作するメソッドなので、本来はconcatや、Spread Operatorを利用し、要素を追加した配列を新しく作り直した方が良い
    tasks.push({
      title,
      id: uniqueId,
    })

    this.setState({ // 変更があったstateのみ上書きする
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

  render() {
    return(
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />{/* addTodoメソッドをTodoInputで使用するために渡す  */}
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;