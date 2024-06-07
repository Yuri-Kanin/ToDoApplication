import PropTypes from "prop-types";
import { useState } from "react";
import "./new-task-form.css";

function NewTaskForm({ handleInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleInputChange(inputValue);
        setInputValue("");
      }}
    >
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
}
NewTaskForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
export default NewTaskForm;
