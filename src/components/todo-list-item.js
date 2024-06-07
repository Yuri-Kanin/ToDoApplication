import PropTypes from "prop-types";
import "./todo-list-item.css";

function TodoListItems({ element }) {
  return <span className="description">{element.matter}</span>;
}
TodoListItems.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
};
export default TodoListItems;
