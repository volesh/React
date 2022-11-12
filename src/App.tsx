import './App.css';
import {FC} from "react";

import {MaineLayout} from "./layOuts/MaineLayout";
import {Navigate, Route, Routes} from "react-router-dom";
import {CarDetailsPage, CarsPage} from "./pages";

const App:FC = () => {
  return (
      <Routes>
        <Route path={''} element={<MaineLayout/>}>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<CarsPage/>}>
                <Route path={'cars:id'} element={<CarDetailsPage/>}/>
            </Route>

        </Route>
      </Routes>
  );
}

export {App};
