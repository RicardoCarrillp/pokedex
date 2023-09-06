import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Items, Pokemon, Pokemons } from "./pages/Routes";

function App() {

  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/pokemons' element={<Pokemons/>}></Route>
            <Route path='/pokemons' element={<Items/>}></Route>
            <Route path='/pokemons/:name' element={<Pokemon/>}></Route>
            <Route path='/' element={<Pokemons/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
