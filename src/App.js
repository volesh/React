import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {MaineLayout} from "./layouts";
import {Login, Register} from "./components";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MaineLayout/>}>
            <Route index element={<Navigate to={'/register'}/>} />
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
