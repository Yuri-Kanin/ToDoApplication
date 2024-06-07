import PropTypes from "prop-types";
import { useState } from "react";
import "./task-filter.css";

function TaskFilter({ handlerOnButtonSelect }) {
  const [Data, setData] = useState([
    { id: 1, info: "All", selected: true },
    { id: 2, info: "Active", selected: false },
    { id: 3, info: "Completed", selected: false },
  ]);

  function handlerOnButtonClick(id) {
    setData((value) => {
      const newData = value.map((elem) => {
        if (elem.id === id) {
          return { ...elem, selected: true };
        }
        return { ...elem, selected: false };
      });
      return newData;
    });
  }

  const ItemList = Data.map((elem) => {
    if (elem.selected)
      return (
        <li key={elem.id}>
          <button
            type="button"
            className="selected"
            onClick={() => {
              handlerOnButtonClick(elem.id);
              handlerOnButtonSelect(elem.info);
            }}
          >
            {elem.info}
          </button>
        </li>
      );
    return (
      <li key={elem.id}>
        <button
          type="button"
          onClick={() => {
            handlerOnButtonClick(elem.id);
            handlerOnButtonSelect(elem.info);
          }}
        >
          {elem.info}
        </button>
      </li>
    );
  });

  return <ul className="filters">{ItemList}</ul>;
}
TaskFilter.propTypes = {
  handlerOnButtonSelect: PropTypes.func.isRequired,
};
export default TaskFilter;
