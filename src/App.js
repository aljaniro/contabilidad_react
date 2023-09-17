import Finanzas from "./component/finanzas";
import Presupuesto from "./component/presupuesto";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import './App.css'
import Protector from "./proteccion/protector";
function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{display:"grid",placeItems:"center",width:"1280",height:"100%"}}>
      <Routes>
        <Route path="/" element={<Presupuesto></Presupuesto>}/>
        <Route element={<Protector></Protector>}>
        <Route path="/finanzas" element={<Finanzas></Finanzas>}/></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
/*    <Presupuesto></Presupuesto><Gastos></Gastos> */
