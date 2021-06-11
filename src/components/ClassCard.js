import React,{useState} from "react"


function ClassCard(clas, onClick ,onSubmit){

    const [charName, setCharName] = useState("")

    function handleClick() {
          onClick(clas);
        }
    
    function handleChange(e){
        setCharName((e.target.value))
    }

    function handleBtnClick(e) {
        e.preventDefault()
       /* const updateCharName = {
          e.target.value
        };
    
        fetch(`http://localhost:3001/clas/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(onSubmit);*/
      }

    return (
                
        <div className="card" >
            <h3>{clas.name}</h3>
            <img src ={clas.image} alt = {clas.name}/>
            <p>{clas.desc}</p>
            <button onClick = {handleClick}>Add Class</button>
            <form onSubmit = {handleBtnClick}>
                <input onChange ={handleChange} type = "text" name = "name" value ={clas.charName}></input>
                <button type = "submit"  value = "Submit" ></button>
            </form>
        </div>
    )
}


export default ClassCard;