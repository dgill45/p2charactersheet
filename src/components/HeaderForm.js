import React from "react"

function HeaderForm(e, addClassName, handleUpdate){

    

    return(
        <form>
          <input
            type="text"
            name={e.target.value}
            onChange={handleUpdate}
            value={addClassName.name}
          />
        <input
            type="text"
            charName = {e.target.value}
            onChange={handleUpdate}
            value={addClassName.name}
          />
        <button type="submit">Submit</button>
        </form>
    )
}

export default HeaderForm;