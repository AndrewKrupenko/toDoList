import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            onChange={onToggle}
            index={index}
            key={todo.id}
          />
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default TodoList;
