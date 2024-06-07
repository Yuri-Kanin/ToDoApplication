import PropTypes from "prop-types";
import TodoListItemWrapper from "./todo-list-item-wrapper";
import TodoListItemInputEdit from "./todo-list-item-input-edit";

import "./tasks.css";

function Task({
  element,
  handleCheckboxChange,
  onChange,
  onDelete,
  onListItemEdit,
}) {
  if (element.editing) {
    return (
      <li className="editing">
        <TodoListItemInputEdit
          element={element}
          onListItemEdit={onListItemEdit}
        />
      </li>
    );
  }
  if (element.checked) {
    return (
      <li className="completed">
        <TodoListItemWrapper
          element={element}
          handleCheckboxChange={handleCheckboxChange}
          onChange={onChange}
          onDelete={onDelete}
        />
      </li>
    );
  }

  return (
    <li>
      <TodoListItemWrapper
        element={element}
        handleCheckboxChange={handleCheckboxChange}
        onChange={onChange}
        onDelete={onDelete}
      />
    </li>
  );
}
Task.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onListItemEdit: PropTypes.func.isRequired,
};

export default Task;
