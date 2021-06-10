import React from "react"
import ClassCard from "./ClassCard"

function ClassCardBox(clas){

    const classCards= clas.map((clas) =>{
        <ClassCard key = {clas.id} 
            clas={clas} />          
    })
    
    return (
        <div>
        {classCards}
        </div>
    )
}

export default ClassCardBox;