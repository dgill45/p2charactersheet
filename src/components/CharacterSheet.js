import React from "react"
import ClassCard from "./ClassCard";


function CharacterSheet({clas, onRemoveClass, onChange}){
    const [chararcterName, setCharacterName] = useState("")

    const selectedClassCard = clas.find((clas) => (
        <ClassCard key={clas.id} clas={clas} onClick ={onRemoveClass}/>
      ));
  
    function handleCharUpdate(e){
        setCharacterName((e.target.value))
    }   
    return(
        <div>
            <h3>Character Sheet</h3>
            {selectedClassCard}  
            <input type ="text" name = "name" value ={chararcterName} onChange = {handleCharUpdate}></input>
            <input type = "submit" name = "name"  >Delete your character</input>
        </div>
    )   
}

export default CharacterSheet;