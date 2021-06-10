import React from "react"


function CharacterForm(){

    

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