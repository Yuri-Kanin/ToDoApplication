import PropTypes from "prop-types";
import "./todo-list-item-input.css";

function TodoListItemInput({ element, handleCheckboxChange }) {
  return (
    <input
      className="toggle"
      type="checkbox"
      id={element.id}
      onChange={handleCheckboxChange}
    />
  );
}
TodoListItemInput.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
export default TodoListItemInput;
