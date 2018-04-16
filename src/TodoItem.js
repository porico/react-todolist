import React from 'react';

// [TODO App]
// - １つ１つのtodoを表すコンポーネント
function TodoItem(props) {
  return (
    <li>
      {props.title}
    </li>
  );
}

export default TodoItem;