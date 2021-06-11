import React, {useState} from "react"


function CharacterForm({newClas, onAddCharacter }){
    

    const [formData, setFormData] = useState({
        name:"",
        image: "https://unsplash.com/photos/P8LZaU52NME",
        desc: "",
        charName: ""
    })

    function handleChange(event){

        setFormData({...formData,
            [event.target.name]: event.target.value,
          });
        }

    

    function handleSubmit(event) {
        event.preventDefault();

     onAddCharacter(formData)
     setFormData({
        name:"",
        image: "https://unsplash.com/photos/P8LZaU52NME",
        desc: "",
        charName: ""
    })        
       
      }

    return(
        <div className ="container">
            <form onSubmit={handleSubmit} className ="add-Class">
                <h3>Create a New Character</h3>
                <input type ="text" name = "charName" onChange = {handleChange} value ={formData.charName} placeholder="Name your character"/>
                <input type ="text" name = "name" onChange = {handleChange} value ={formData.name} placeholder="Enter your character's Class"/>
                <input type ="text" name = "image" onChange = {handleChange} value = {formData.image} placeholder ="image url"></input>
                <input type ="text" name = "desc" onChange = {handleChange } value = {formData.desc} placeholder = "description"></input>
                <input type ="submit" name ="submit" value="Create New Character" className="submit" />
            </form>
        </div>
    )
}

export default CharacterForm;