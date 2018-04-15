import React from 'react';

// [TODO App]
// - １つ１つのtodoを表すコンポーネント
function TodoItem(props) {
  return (
    <li>
      {props.titles}
    </li>
  );
}

export default TodoItem;