
import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';
import Header from "./components/Header";
import ClassCardBox from "./components/ClassCardBox";
import RaceCardBox from "./components/RaceCardBox";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  /*const [showForm, setShowForm] = useState(false);*/
    const [clas, setClas] = useState([]);

  useEfect(() => {
    fetch("http://localhost:3000/clas")
    .then((r) => r.json())
    .then(setClas(clas))
  },[]);



  return (
    <div className="App">
      <Header />
      <ClassCardBox clas = {clas}/>
      <RaceCardBox />
      <CharacterSheet />
    </div>
  );
}

export default App;
