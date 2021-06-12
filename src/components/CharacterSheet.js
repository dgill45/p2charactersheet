import React, {useState} from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass, onChange, toggleClass, onAddClass}){
    const [characterName, setCharacterName] = useState("")

       function renderSelectedCard(){
        const selectedClass = clas.map((clas) => (
        clas.charName === characterName.toLowerCase()
      ));
        return <ClassCard key={selectedClass.id} clas={selectedClass} onClick ={onRemoveClass} onChange={onChange}/>
    }

    function handleCharUpdate(e, clas){
          setCharacterName((e.target.value))
          renderSelectedCard()
    }

    return(
        <div className ="character-sheet">
            <h3>Character Sheet</h3>
            <button type="submit" toggleClass={toggleClass}></button>
            <div>{characterName && renderSelectedCard()}</div>
            <input type ="text" name = "name" value ={characterName} onChange = {handleCharUpdate} />
            <button type = "submit" name = "name"  onClick={onRemoveClass} >Delete your character</button>
        </div>
    )   
}

export default CharacterSheet;