import React, {useContext} from "react";
import Context from "../context";
import PropTypes from "prop-types";

function TodoItem({ todo, onChange, index }) {

  const { removeTodo } = useContext(Context);
  const classes = ['item-label'];

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li className="todo-item">
      <label className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
          className="todo-item-input"
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </label>

      <button className="rm" onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem;