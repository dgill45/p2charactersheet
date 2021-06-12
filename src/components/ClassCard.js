import React from "react"


function ClassCard({clas, onClick, onDeleteChar, setCharName} ){
      
        
    function handleClick() {
          onClick(clas);
        }
    
    function handleChange(e){
        e.preventDefault()
        setCharName((e.target.value))
    }

    function handleDeleteChar(){
        onDeleteChar(clas.id)
    }

    
    return (
                
        <div className="card" >
            <div className="card-body">
                <h3>{clas.name}</h3>
                <img width = "200px" height ="200px" src ={clas.image} alt = {clas.name}/>
                <p>{clas.desc}</p>
                <button className = "add-class" onClick = {handleClick}>Add Class to CharacterSheet</button>
                <button className = "delete-character/class" onClick = {handleDeleteChar}>Delete Character/Class</button>
                <form onSubmit = {handleChange} >
                    <input type = "text" name = "name" value ={clas.charName}/>
                    <button type = "submit"  value = "Submit" >Edit</button>
                </form>
            </div>
        </div>
    )
}


export default ClassCard;