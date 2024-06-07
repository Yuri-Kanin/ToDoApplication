import { useEffect, useState } from "react";
import AppHeader from "./app-header";
import MainSection from "./main-section";
import "./todoapp.css";

function App() {
  const [Data, setData] = useState([]);
  const ItemCountLeft =
    Data.length - [...Data].filter((el) => el.checked).length;

  function findIndex(id) {
    const index = Data.findIndex((el) => el.id === id);
    return index;
  }

  function setDataHandleCheckboxChange(id) {
    setData(() => {
      const index = findIndex(id, Data);
      const newData = [...Data];
      newData[index].checked = !newData[index].checked;
      return newData;
    });
  }
  function setDataOnChange(id) {
    setData(() => {
      const index = findIndex(id);
      const newData = [...Data];
      newData[index].editing = !newData[index].editing;
      return newData;
    });
  }
  function setDataOnDelete(id) {
    setData(() => {
      const index = findIndex(id);
      const newArr = [...Data.slice(0, index), ...Data.slice(index + 1)];
      return newArr;
    });
  }
  function onListItemEdit(text, id) {
    setData(() => {
      const index = findIndex(id);
      const oldItem = Data[index];
      const newItem = { ...oldItem, matter: text, editing: false };
      const newData = [...Data];
      newData[index] = newItem;
      return newData;
    });
  }

  function handleInputChange(text) {
    setData(() => {
      const newData = [
        ...Data,
        { id: Data.length + 1, matter: text, checked: false, editing: false },
      ];
      return newData;
    });
  }

  const [filtered, setFiltered] = useState(Data);

  function handlerOnButtonSelect(info) {
    if (info === "All") {
      setFiltered(Data);
    } else if (info === "Active") {
      const newData = [...Data].filter((item) => !item.checked);
      setFiltered(newData);
    } else {
      const newData = [...Data].filter((item) => item.checked);
      setFiltered(newData);
    }
  }
  useEffect(() => {
    setFiltered(Data);
  }, [Data]);

  function clearCompleteHandler() {
    setData(() => {
      const newData = [...Data].filter((elem) => !elem.checked);
      return newData;
    });
  }

  return (
    <section className="todoapp">
      <AppHeader handleInputChange={(text) => handleInputChange(text)} />
      <MainSection
        Data={filtered}
        handleCheckboxChange={(id) => setDataHandleCheckboxChange(id)}
        onChange={(id) => setDataOnChange(id)}
        onDelete={(id) => setDataOnDelete(id)}
        onListItemEdit={(text, id) => onListItemEdit(text, id)}
        ItemCountLeft={ItemCountLeft}
        handlerOnButtonSelect={(info) => {
          handlerOnButtonSelect(info);
        }}
        clearCompleteHandler={() => {
          clearCompleteHandler();
        }}
      />
    </section>
  );
}

export default App;
