import {CarsPage, LoginPage} from "./pages";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {

  return (
    <Routes>
        <Route path={'/'} element={<Navigate to={'/login'}/>}/>
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/cars'} element={<CarsPage/>}/>
    </Routes>
  );
}

export default App;
