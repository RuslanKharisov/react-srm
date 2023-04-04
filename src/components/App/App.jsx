import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Form from "../Form/Form";
import Table from "../Table/Table";
import Edit from "../Edit/Edit";
import Navigate from "../Navigate/Navigate";
import "./main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigate />
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
