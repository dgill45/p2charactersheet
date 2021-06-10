import React from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass}){

    const selectedClassCard = clas.find((clas) => (
        <ClassCard key={clas.id} clas={clas} />
      ));
  
   
    return(
        <div>
            <h3>Character Sheet</h3>
            {selectedClassCard}  
        </div>
    )   
}

export default CharacterSheet;