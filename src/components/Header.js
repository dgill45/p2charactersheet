import React, {useState} from "react";
import HeaderForm from "./HeaderForm";


function Header(){

    const [addClassName, setAddClassName] = useState({})

    function handleUpdate(clas, e, id) {
        setAddClassName(e.target.value)

        fetch(`http://localhost:3000/clas/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clas),
        })
          .then((r) => r.json())
          .then((data) => {
          
            if (clas.name === data.name){
            setAddClassName((addClassName.name));
            }else {

                return setAddClassName(clas.name)
            }
          });
        }

    return(
        <div className ="header" >
            <h1> D and D Character Sheet</h1>
            <HeaderForm addClassName= {addClassName} onChange={handleUpdate} />
        </div>

    )
}


export default Header;