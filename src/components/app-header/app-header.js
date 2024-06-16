import PropTypes from "prop-types";
import NewTaskForm from "../new-task-form/new-task-form";
import "./app-header.css";

function AppHeader({ handleInputChange }) {
  return (
    <header className="header">
      <h1>TodoApp</h1>
      <NewTaskForm handleInputChange={handleInputChange} />
    </header>
  );
}
AppHeader.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};
export default AppHeader;
