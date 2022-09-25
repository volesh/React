import {Link, Route, Routes} from "react-router-dom";

import {Todos} from "./components/todos/Todos";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";
import {Post} from "./components/Post/Post";

function App() {
  return (
      <div>

          <ul>
              <li><Link to={'/todos'}>Todos</Link></li>
              <li><Link to={'/albums'}>Albums</Link></li>
              <li><Link to={'/comments'}>Comments</Link></li>
          </ul>

          <Routes>
              <Route path={'todos'} element={<Todos/>}/>
              <Route path={'albums'} element={<Albums/>}/>
              <Route path={'comments'} element={<Comments/>}/>
              <Route path={'post'} element={<Post/>}/>
          </Routes>
      </div>

  );
}

export default App;
