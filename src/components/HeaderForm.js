import React from "react"

function HeaderForm(addClassName, handleUpdate){

    

    return(
        <form>
          <input
            type="text"
            onChange={handleUpdate}
            value={addClassName.name}
          />
        <input
            type="text"
            onChange={handleUpdate}
            value={addClassName.charName}
          />
        <button type="submit">Submit</button>
        </form>
    )
}

export default HeaderForm;