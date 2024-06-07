import PropTypes from "prop-types";
import Task from "./tasks";
import "./task-list.css";

function TaskList({
  Data,
  handleCheckboxChange,
  onChange,
  onDelete,
  onListItemEdit,
}) {
  function foo(element) {
    return (
      <Task
        element={element}
        handleCheckboxChange={() => handleCheckboxChange(element.id)}
        onChange={() => onChange(element.id)}
        onDelete={() => onDelete(element.id)}
        onListItemEdit={onListItemEdit}
        key={element.id}
      />
    );
  }

  const arr = Data.map(foo);

  return <ul className="todo-list">{arr}</ul>;
}

TaskList.propTypes = {
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      matter: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onListItemEdit: PropTypes.func.isRequired,
};

export default TaskList;
