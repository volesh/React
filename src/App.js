import {Route, Routes} from "react-router";

import {Users} from "./components";
import {Header} from "./components";
import {Posts} from "./components";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path={'/users'} element={<Users/>}/>
          <Route path={'/posts'} element={<Posts/>}/>
      </Routes>
    </>
  );
}

export default App;
