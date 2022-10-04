import './App.css';
import {Login} from "./components/login/Login";
import {Header} from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route  element={<Header/>}/>
    </Routes>
  );
}

export default App;
