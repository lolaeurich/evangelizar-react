import Home from "./pages/Home";
import AreaLogada from "./pages/areaLogada.jsx";
import MinhasVelas from "./pages/MinhasVelas.jsx";
import TodasAsVelas from "./pages/TodasAsVelas.jsx";
import { Route, Routes } from "react-router-dom";
import VerRevista from "./pages/VerRevista.jsx";
import MeusTestemunhos from "./pages/MeusTestemunhos.jsx";
import TodosOsTestemunhos from "./pages/TodosOsTestemunhos.jsx";
import MyBook from "./components/Revistas/Revista1.jsx";
import MyBook2 from "./components/Revistas/Revista2.jsx";
import MyBook3 from "./components/Revistas/Revista3.jsx";
import VerJornal from "./pages/VerJornal.jsx";
import MyJornal1 from "./components/Jornais/Jornal1.jsx";
import MyJornal2 from "./components/Jornais/Jornal2.jsx";
import MyJornal3 from "./components/Jornais/Jornal3.jsx";


const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/AreaLogada" element={<AreaLogada/>}/>
     <Route path="/MinhasVelas" element={<MinhasVelas/>}/>
     <Route path="/TodasAsVelas" element={<TodasAsVelas/>}/>
     <Route path="/VerRevista" element={<VerRevista/>}/>
     <Route path="/MeusTestemunhos" element={<MeusTestemunhos/>}/>
     <Route path="/TodosOsTestemunhos" element={<TodosOsTestemunhos/>}/>
     <Route path="/Revista1" element={<MyBook/>}/>
     <Route path="/Revista2" element={<MyBook2/>}/>
     <Route path="/Revista3" element={<MyBook3/>}/>
     <Route path="/VerJornal" element={<VerJornal/>}/>
     <Route path="/Jornal1" element={<MyJornal1/>}/>
     <Route path="/Jornal2" element={<MyJornal2/>}/>
     <Route path="/Jornal3" element={<MyJornal3/>}/>
    </Routes>
  );
}

export default App 