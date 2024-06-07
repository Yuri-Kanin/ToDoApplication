import PropTypes from "prop-types";
import TodoListItemInput from "./todo-list-item-input";
import TodoListItemLabel from "./todo-list-item-label";
import TodoListItemButton from "./todo-list-item-button";
import "./todo-list-item-wrapper.css";

function TodoListItemWrapper({
  element,
  handleCheckboxChange,
  onChange,
  onDelete,
}) {
  return (
    <div className="view">
      <TodoListItemInput
        element={element}
        handleCheckboxChange={handleCheckboxChange}
      />
      <TodoListItemLabel element={element} />
      <TodoListItemButton classNameProp="icon icon-edit" onChange={onChange} />
      <TodoListItemButton
        classNameProp="icon icon-destroy"
        onChange={onDelete}
      />
    </div>
  );
}

TodoListItemWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItemWrapper;
