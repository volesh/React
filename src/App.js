import {Navigate, Route, Routes} from "react-router-dom";
import {setupStore} from "./redux";


import './App.css';
import {MaineLayout} from "./layouts";
import {Login, Register, Cars} from "./components";
import {RequaireAuth} from "./hoc";

function App() {
    const store = setupStore()
  return (
      <Routes>
          <Route path={'/'} element={<MaineLayout/>}>
              <Route index element={<Navigate to={'/login'}/>} />
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/register'} element={<Register/>}/>
              <Route path={'/cars'} element={
                  <RequaireAuth>
                      <Cars/>
                  </RequaireAuth>
              }/>
          </Route>
      </Routes>
  );
}

export default App;
