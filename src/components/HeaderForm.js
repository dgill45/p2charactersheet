import React from "react"

function HeaderForm(addClassName, handleUpdate){

    

    return(
        <form>
          <input
            type="text"
            onChange={handleUpdate}
            value={addClassName.name}
            placeholder="Add a Class Name"
          />
        <input
            type="text"
            onChange={handleUpdate}
            value={addClassName.charName}
            placeholder ="Name a character"
          />
        <button type="submit">Submit</button>
        </form>
    )
}

export default HeaderForm;