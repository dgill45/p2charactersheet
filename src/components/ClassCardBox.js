import React from "react"
import ClassCard from "./ClassCard"

function ClassCardBox({clas, onAddClass}){

    const classCards= clas.map((clas) =>{
        <ClassCard key = {clas.id} onClick={onAddClass}
            clas={clas} />          
    })
    
    return (
        <div>
        {classCards}
        </div>
    )
}

export default ClassCardBox;