import React from "react"


function ClassCard(clas){

    return (
        <div className="card" key ={clas.id}>
            <h3>{clas.name}</h3>
            <div>{clas.image}</div>
            <p>{clas.desc}</p>
            <button>Add Class</button>
        </div>
    )
}


export default ClassCard;