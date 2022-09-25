import {NavLink, Route, Routes} from "react-router-dom";
import css from './App.css'

import {Todos} from "./components/todos/Todos";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";
import {Post} from "./components/Post/Post";

function App() {
  return (
      <div>

          <ul>
              <li><NavLink className={'nav'} to={'/todos'}>Todos</NavLink></li>
              <li><NavLink className={'nav'} to={'/albums'}>Albums</NavLink></li>
              <li><NavLink className={'nav'} to={'/comments'}>Comments</NavLink></li>
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
