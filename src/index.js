import ReactDom from "react-dom/client";
import App from "./components/App";

const root = document.getElementById("root");
function TodoApp() {
  return (
    <section className="todoapp">
      <App />
    </section>
  );
}

ReactDom.createRoot(root).render(<TodoApp />);
