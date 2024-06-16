import PropTypes from "prop-types";
import { useState } from "react";
import "./todo-list-item-input-edit.css";

function TodoListItemInputEdit({ element, onListItemEdit }) {
  const [inputValue, setInputValue] = useState(element.matter);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onListItemEdit(inputValue, element.id);
      }}
    >
      <input
        type="text"
        className="edit"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}
TodoListItemInputEdit.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    matter: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
  onListItemEdit: PropTypes.func.isRequired,
};
export default TodoListItemInputEdit;
