import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import MyExploits from "./pages/MyExploits";
import Wamagana from "./pages/my-exploits/Wamagana";
import Zaina from "./pages/my-exploits/Zaina";
import Kagumo from "./pages//my-exploits/kagumo";
import Gura from "./pages/my-exploits/Gura";
import Temptation from "./pages/my-exploits/Temptation";
import Chinga from "./pages/my-exploits/Chinga";
import Itundu from "./pages/my-exploits/Itundu";
import NyeriTourism from "./pages/my-exploits/NyeriTourism";
import Ndomboche from "./pages/my-exploits/Ndomboche";
import Maumau from "./pages/my-exploits/Maumau";
import Muruguru from "./pages/my-exploits/Muruguru";
import Ololokwe from "./pages/my-exploits/Ololokwe";
import Buffalo from "./pages/my-exploits/Buffalo";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my_exploits" element={<MyExploits/>} />
     <Route path="/my-exploits/wamagana-falls" element={<Wamagana/>} />
     <Route path="/my-exploits/zaina-falls" element={<Zaina/>} />
     <Route path="/my-exploits/kagumo-falls" element={<Kagumo/>} />
     <Route path="/my-exploits/gura-river" element={<Gura/>} />
     <Route path="/my-exploits/temptation-island" element={<Temptation/>} />
     <Route path="/my-exploits/chinga-dam" element={<Chinga/>} />
     <Route path="/my-exploits/itundu-falls" element={<Itundu/>} />
     <Route path="/my-exploits/nyeri-tourism" element={<NyeriTourism/>} />
     <Route path="/my-exploits/ndomboche-falls" element={<Ndomboche/>} />
      <Route path="/my-exploits/maumau-caves" element={<Maumau/>} />
      <Route path="/my-exploits/muruguru-falls" element={<Muruguru/>} />
      <Route path="/my-exploits/mt-ololokwe" element={<Ololokwe/>} />
      <Route path="/my-exploits/buffallo-springs" element={<Buffalo/>} />
    </Routes>
    </>
  );
}

export default App;
