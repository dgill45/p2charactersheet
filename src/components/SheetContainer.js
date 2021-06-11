import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';
import ClassCardBox from "./components/ClassCardBox";
import CharacterForm from "./components/CharacterForm";

function SheetContainer(){
    const [clas, setClas] = useState([]);
    const [newClas, setNewClas] = useState([]);
    const [changeSheet, setChangeSheet] = useState([]);
    const [charName, setCharName]= useState({})
    
  useEfect(() => {
    fetch("http://localhost:3000/clas")
    .then((r) => r.json())
    .then(setClas)
  },[]);

  function handleAddClass(addedClass) {
    const classAddToSheet = changeSheet.find(
        (clas) => clas.id === addedClass.id
    );
    if (!classAddToSheet) {
      setChangeSheet([...changeSheet, addedClass]);
    }
  }

  function handleRemoveClass(removeClass) {
    setChangeSheet((changeSheet) =>
      changeSheet.filter((clas) => clas.id !== removeClass.id)
    );
  }

  function handleAddCharacter(newClas){
    setNewClas([...clas, newClas]);
  }
  
  function handleDeleteChar(charToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys);
  }

    return(
        <div>
            <ClassCardBox clas = {clas, changeSheet} onAddClass={handleAddClass}/>
            <CharacterSheet clas ={clas, changeSheet} onRemoveClass={handleRemoveClass}/>
            <CharacterForm clas = {clas, newClas} onSubmit ={handleAddCharacter}  />
        </div>
    )
}

export default SheetContainer;