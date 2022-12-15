import Todolist from "./component/Todolist";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todolist />} />
      </Routes>
    </div>
  );
}
