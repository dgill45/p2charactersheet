import React, {useState} from "react"


function CharacterForm([newClas, onAddCharacter ] ){
    

    const [formData, setFormData] = useState({
        name:"",
        image: "https://unsplash.com/photos/P8LZaU52NME",
        desc: ""
    })

    function handleChange(event){

        setFormData({...formData,
            [event.target.name]: event.target.value,
          });
        }

    

    function handleSubmit(event) {
        event.preventDefault();

    const newClas = [...formData, setFormData]

            
        fetch("http://localhost:3000/clas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClas),
        })
          .then((r) => r.json())
          .then(setFormData);
      }

    return(
        <div className ="container">
            <form onSubmit={handleSubmit} classname ="add-Class">
                <h3>Create a New Character</h3>
                <input type ="text" name = "name" onChange = {handleChange} value ={charName} placeholder="Name your character"></input>
                <input type ="text" name = "name" onChange = {handleChange} value ={formData.name} placeholder="Enter your character's Class"></input>
                <img src = {formData.image} defaultValue ={formData.image} ></img>
                <input type ="submit" name ="submit" value="Create New Character" className="submit" onAddCharacter={handlechange}></input>
            </form>
        </div>
    )
}

export default CharacterForm;