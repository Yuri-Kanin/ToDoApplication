import PropTypes from "prop-types";
import TodoListItems from "./todo-list-item";
import TodoListItemCreatedTime from "./todo-list-item-created-time";
import "./todo-list-item-label.css";

function TodoListItemLabel({ element }) {
  return (
    <label htmlFor={element.id} className="todo-list-item-label">
      <TodoListItems element={element} />
      <TodoListItemCreatedTime />
    </label>
  );
}
TodoListItemLabel.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
};
export default TodoListItemLabel;
