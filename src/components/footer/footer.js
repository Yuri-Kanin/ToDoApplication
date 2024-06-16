import PropTypes from "prop-types";
import TaskFilter from "../task-filter/task-filter";
import "./footer.css";

function Footer({
  ItemCountLeft,
  handlerOnButtonSelect,
  clearCompleteHandler,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{ItemCountLeft} item left</span>
      <TaskFilter handlerOnButtonSelect={handlerOnButtonSelect} />
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompleteHandler}
      >
        Clear completed
      </button>
    </footer>
  );
}
Footer.propTypes = {
  ItemCountLeft: PropTypes.number.isRequired,
  handlerOnButtonSelect: PropTypes.func.isRequired,
  clearCompleteHandler: PropTypes.func.isRequired,
};
export default Footer;
