import PropTypes from "prop-types";
import TaskList from "./task-list";
import Footer from "./footer";
import "./main-section.css";

function MainSection({
  Data,
  handleCheckboxChange,
  onChange,
  onDelete,
  onListItemEdit,
  ItemCountLeft,
  handlerOnButtonSelect,
  clearCompleteHandler,
}) {
  return (
    <section className="main">
      <TaskList
        Data={Data}
        handleCheckboxChange={handleCheckboxChange}
        onChange={onChange}
        onDelete={onDelete}
        onListItemEdit={onListItemEdit}
      />
      <Footer
        ItemCountLeft={ItemCountLeft}
        handlerOnButtonSelect={handlerOnButtonSelect}
        clearCompleteHandler={clearCompleteHandler}
      />
    </section>
  );
}

MainSection.propTypes = {
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
  ItemCountLeft: PropTypes.number.isRequired,
  handlerOnButtonSelect: PropTypes.func.isRequired,
  clearCompleteHandler: PropTypes.func.isRequired,
};

export default MainSection;
