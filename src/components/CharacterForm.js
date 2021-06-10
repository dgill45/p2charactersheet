import React, {useState} from "react"


function CharacterForm([clas, onAddCharacter ] ){
    const [formData, showFormData] = useState([])

    function handleSubmit(event) {
        event.preventDefault();

    const newClas = [...formData, showFormData]

            
        fetch("http://localhost:3000/clas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClas),
        })
          .then((r) => r.json())
          .then(onAddClass);
      }

    return(
        <div className ="container">
            <form onSubmit={handleSubmit} classname ="add-Class">
                <input type ="text" name ="name" placeholder="Name your character"></input>
                <input type ="text" name ="name" placeholder="Enter your character's Class"></input>
                <input type ="submit" name ="submit" value="Create New Character" className="submit"></input>
            </form>
        </div>
    )
}

export default CharacterForm;