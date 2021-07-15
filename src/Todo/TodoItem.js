import React, {useContext} from "react";
import Context from "../context";
import PropTypes from 'prop-types'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '0.5rem'
  },
}

function TodoItem({ todo, index, onChange }) {

  const { removeTodo } = useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <label className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
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