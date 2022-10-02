import {Navigate, Route, Routes} from "react-router-dom";

import {MaineLayaut} from "./layauts/maineLayaut/MaineLayaut";
import {Register, Login, Cars} from "./components";


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MaineLayaut/>}>
        <Route index element={<Navigate to={'/login'}/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/cars'} element={<Cars/>}/>
      </Route>
    </Routes>
  );
}

export default App;
