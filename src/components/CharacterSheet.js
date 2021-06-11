import React from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass, onChange}){

    const selectedClassCard = clas.find((clas) => (
        <ClassCard key={clas.id} clas={clas} onClick ={onRemoveClass}/>
      ));
  
   
    return(
        <div>
            <h3>Character Sheet</h3>
            {selectedClassCard}  
            <input type ="text" name = "name" value ="character" onChange = {handleCharUpdate}></input>
            <input type = "submit" name = "name" >Delete your character</input>
        </div>
    )   
}

export default CharacterSheet;