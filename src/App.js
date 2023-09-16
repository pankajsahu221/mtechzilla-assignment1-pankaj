import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Timer from "./components/Timer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
