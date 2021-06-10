import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';
import ClassCardBox from "./components/ClassCardBox";
import CharacterForm from "./components/CharacterForm";

function MainContainer(){
    const [showForm, setShowForm] = useState(false);
    const [changeSheet, setChangeSheet] = useState([]);
    const [clas, setClas] = useState([]);

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

    return(
        <div>
            <ClassCardBox clas = {clas} onAddClass={handleAddClass}/>
            <CharacterSheet clas ={clas} onRemoveClass={handleRemoveClass}/>
            <CharacterForm onSubmit ={handleClick} onAddCharacter={handleAddCharacter} />
        </div>
    )
}

export default MainContainer;