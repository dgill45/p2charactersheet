import React from "react"
import ClassCard from "./ClassCard"

function ClassCardBox([clas]){
    const classCard = clas.map((clas) =>{
        <ClassCard key = {clas.id} 
            clas={clas} />
            
    })
    return (
        <div>
        {classCard}
        </div>
    )
}

export default ClassCardBox;