import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import MyExploits from "./pages/MyExploits";
import Wamagana from "./pages/my-exploits/Wamagana";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my_exploits" element={<MyExploits/>} />
     <Route path="/my-exploits/wamagana-falls" element={<Wamagana/>} />

    </Routes>
    </>
  );
}

export default App;
