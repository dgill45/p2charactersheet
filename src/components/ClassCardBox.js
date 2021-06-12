import React from "react"
import ClassCard from "./ClassCard"

function ClassCardBox({clas, onAddClass, onDeleteChar, onUpdateChar,}){


    const classCards= clas.map((clas) =>{
       return <ClassCard key = {clas.id} onClick={onAddClass} onDeleteChar={onDeleteChar} onUpdateChar={onUpdateChar}
            clas={clas} />          
    })
    
    return (
        <div className ="card-box">
        {classCards}
        </div>
    )
}

export default ClassCardBox;