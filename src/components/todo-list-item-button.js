import PropTypes from "prop-types";
import "./todo-list-item-button.css";

function TodoListItemButton({ classNameProp, onChange }) {
  return (
    <button
      aria-label="Button"
      type="button"
      className={classNameProp}
      onClick={onChange}
    />
  );
}
TodoListItemButton.propTypes = {
  classNameProp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TodoListItemButton;
