import React from "react"

function HeaderForm(addClassName, handleAddCharacter, handleUpdate){

    

    return(
        <form onSubmit = {handleUpdate} handleaddcharacter={handleAddCharacter}>
          <input
            type="text"
            value={addClassName.name}
            placeholder="Add a Class Name"
          />
        <input
            type="text"
            value={addClassName.charName}
            placeholder ="Name a character"
          />
        <button type="submit">Submit</button>
        </form>
    )
}

export default HeaderForm;