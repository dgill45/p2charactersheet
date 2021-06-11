import React from "react"
import ClassCard from "./ClassCard"

function ClassCardBox({clas, onAddClass, onDeleteChar}){


    const classCards= clas.map((clas) =>{
       return <ClassCard key = {clas.id} onClick={onAddClass} onDeleteChar={onDeleteChar}
            clas={clas} />          
    })
    
    return (
        <div>
        {classCards}
        </div>
    )
}

export default ClassCardBox;