import './App.css';
import Users from "./components/Users/Users";
import Flights from "./components/Spase X/Flights";

function App() {
  return (
    <div className="App">
        <Users/>
        <h2 className={'name'}>SpaceX</h2>
        <Flights/>
    </div>
  );
}

export default App;
