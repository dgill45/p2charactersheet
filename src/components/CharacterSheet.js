import React, {useState} from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass,}){
    const [characterName, setCharacterName] = useState("")

  
    const selectedClass = clas.find((clas) => (
        clas.charName === characterName.toLowerCase()
      ));

    function renderSelectedCard(){
        return <ClassCard key={selectedClass.id} clas={selectedClass} onClick ={onRemoveClass}/>
    }

    function handleCharUpdate(e){
        setCharacterName((e.target.value))
    }   
    return(
        <div>
            <h3>Character Sheet</h3>
            {characterName && renderSelectedCard()}  
            <input type ="text" name = "name" value ={characterName} onChange = {handleCharUpdate} />
            <button type = "submit" name = "name"  >Delete your character</button>
        </div>
    )   
}

export default CharacterSheet;