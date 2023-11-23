import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
