
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Beer from './pages/Beer';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from "./pages/NewBeer";

function App() {


  

  return (
    <div className="App">

    <Header/>

    <Home/>
    <div>

      <Routes>
        <Route path="/beer" element={<Beer/>} />
        <Route path="/beers/:id" element={<SingleBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer />} />

      </Routes>
    </div>

    </div>
  );
}

export default App;
