import React, {useState} from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass, onChange, handleUpdate}){
    const [characterName, setCharacterName] = useState("")

  
    const selectedClass = clas.find((clas) => (
        clas.charName === characterName.toLowerCase()
      ));

    function renderSelectedCard(){
        return <ClassCard key={selectedClass.id} clas={selectedClass} onClick ={onRemoveClass} onChange={onChange}/>
    }

    function handleCharUpdate(e, clas, onChange){
          setCharacterName((e.target.value))
    }

    return(
        <div className ="character-sheet">
            <h3>Character Sheet</h3>
            {characterName && renderSelectedCard()}  
            <input type ="text" name = "name" value ={characterName} onChange = {handleCharUpdate} />
            <button type = "submit" name = "name"  onClick={onRemoveClass} >Delete your character</button>
        </div>
    )   
}

export default CharacterSheet;