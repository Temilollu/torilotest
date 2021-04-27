import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
