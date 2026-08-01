import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import MyExploits from "./pages/MyExploits";

function App() {
  return (
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my_exploits" element={<MyExploits/>} />
    </Routes>
  );
}

export default App;
