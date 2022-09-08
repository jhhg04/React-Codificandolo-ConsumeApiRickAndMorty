import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/personaje/:id" element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
