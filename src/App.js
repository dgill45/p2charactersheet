
import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';
import Header from "./components/Header";
import ClassCardBox from "./components/ClassCardBox";
import RaceCardBox from "./components/RaceCardBox";


function App() {

    const [showForm, setShowForm] = useState(false);
    const [clas, setClas] = useState([]);

  useEfect(() => {
    fetch("http://localhost:3000/clas")
    .then((r) => r.json())
    .then(setClas)
  },[]);

  function handleAddCharacter(newClas){
    setClas([...clas, newClas])

  }

  function handleClick(){
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="App">
      <Header />
      {showForm ? <CharacterForm  onSubmit = {handleSubmit} onAddCharacter={handleAddCharacter} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ClassCardBox clas = {clas}/>
      <CharacterSheet clas ={clas}/>
    </div>
  );
}

export default App;
