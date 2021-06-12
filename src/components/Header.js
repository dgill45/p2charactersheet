import React, {useState} from "react";
import HeaderForm from "./HeaderForm";


function Header(){

    const [addClassName, setAddClassName] = useState({})

    function handleUpdate(clas, e, id) {

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
            setAddClassName((addClassName.name) ={[e.target.name]: e.target.value,
                    });
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