import {Navigate, Route, Routes} from "react-router-dom";


import {MaineLayout} from "./layouts";
import {LoginPage} from "./pages";
import {CarsPage} from "./pages/carsPage/CarsPage";


function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MaineLayout/>}>
          <Route index element={<Navigate to={'/login'}/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/cars'} element={<CarsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
