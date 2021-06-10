import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';
import ClassCardBox from "./components/ClassCardBox";
import CharacterForm from "./components/CharacterForm";

function MainContainer(){
    const [showForm, setShowForm] = useState(false);
    const [clas, setClas] = useState([]);

  useEfect(() => {
    fetch("http://localhost:3000/clas")
    .then((r) => r.json())
    .then(setClas)
  },[]);

  function addClassToSheet(addedClass){
    
    const selectedClassCard = clas.find((clas) => (
        <ClassCard key={clas.id} clas={clas} />
      ));
  }

  function handleAddClass(newClas){
    setClas([...clas, newClas])

  }

  function handleClick(){
    setShowForm((showForm) => !showForm)
  }

    return(
        <div>
            <ClassCardBox onAddClass={handleAddClass}/>
            <CharacterSheet onClick/>
            <CharacterForm onSubmit ={handleClick} onAddCharacter={handleAddCharacter} />
            <ClassCardBox clas = {clas} onClick= {handleAddClass}/>
            <CharacterForm  onSubmit = {handleSubmit} onAddCharacter={handleAddCharacter} />
            <CharacterSheet clas ={clas} onClick={handleAddClass}/>
        </div>
    )
}

export default MainContainer;