import React, { useState, useEffect } from "react";
import CharacterSheet from "./CharacterSheet";
import ClassCardBox from "./ClassCardBox";
import CharacterForm from "./CharacterForm";
import Header from "./Header";

function SheetContainer(){
    const [clas, setClas] = useState([]);
    const [newClas, setNewClas] = useState([]);
    const [changeSheet, setChangeSheet] = useState([]);
   
    
    
  useEffect(() => {
    fetch("http://localhost:3000/clas")
    .then((r) => r.json())
    .then(setClas)
  },[]);

  function addClassToSheet(clas) {
    
    return clas.map(cla => {
       return ({...cla, inCharacterSheet: false})
    })
   
    }
    function handleAddClass(addedClass) {
      const classAddToSheet = changeSheet.find(
          (clas) => clas.id === addedClass.id
      );
      if (!classAddToSheet) {
        setChangeSheet([...changeSheet, addedClass]);
      }
    }

  function filterCharSheet(){
    if (clas){
      
    return clas.filter(clas => clas.inCharacterSheet)
  }
    return []
  }

  function toggleClass(clas){
    
    return {...clas, inCharacterSheet: !clas.inCharacterSheet}

  }
    
  
  function handleRemoveClass(removeClass) {
    setChangeSheet((changeSheet) =>
      changeSheet.filter((clas) => clas.id !== removeClass.id)
    );
  }
  
  
  function handleDeleteChar(id) {
    fetch(`http://localhost:3000/clas/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
       const updatedList =clas.filter((char) =>{
         return char.id !==id      
         })
         setClas(updatedList)
      });
  }

  function handleAddCharacter(newClas){
    console.log("text")
    fetch("http://localhost:3000/clas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClas),
        })
          .then((r) => r.json())
          .then((data) => {
            setNewClas([...clas, data]);
          }) ;
  }
      
    
   
     return(
        <div className ="sheet-container">
            <Header clas = {clas}/>
            <ClassCardBox clas = {clas}
            changeSheet = {changeSheet}  
              onAddClass={handleAddClass}  
              onDeleteChar={handleDeleteChar}/>
              <CharacterSheet clas = {filterCharSheet(clas)}
              addClassToSheet = {addClassToSheet}
              toggleClass = {toggleClass}
              onAddClass = {handleAddClass}
              changeSheet = {changeSheet}
              onRemoveClass={handleRemoveClass}/>
            <CharacterForm clas = {clas} 
              newClas = {newClas} 
              onAddCharacter ={handleAddCharacter}  />
        </div>
    
    )}



  export default SheetContainer;