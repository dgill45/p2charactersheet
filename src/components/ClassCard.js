import React from "react"


function ClassCard(clas){



    return (
        
        <div className="card" >
            <h3>{clas.name}</h3>
            <img src ={clas.image} alt = {clas.name}/>
            <p>{clas.desc}</p>
            <button onClick = {handleAddClass}>Add Class</button>
        </div>
    )
}


export default ClassCard;