import React from "react"


function ClassCard(clas, onClick){

    function handleClick() {
          onClick(clas);
        }


    return (
        
        
        <div className="card" >
            <h3>{clas.name}</h3>
            <img src ={clas.image} alt = {clas.name}/>
            <p>{clas.desc}</p>
            <button onClick = {handleClick}>Add Class</button>
        </div>
    )
}


export default ClassCard;