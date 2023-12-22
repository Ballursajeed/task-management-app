import React from "react";
import { FaEdit } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { baseURI } from "../utils/constants.js";

const ToDo = ({text, id, setUpdateUI, setShowPopup, setPopupContent}) => {

   const deleteTodo = () => {
      axios.delete(`${baseURI}/api/delete/${id}`).then(res => {
               console.log(res.data);
               setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => console.log(error));
   }

  const updateTodo = () => {
  	setPopupContent({text, id});
  	setShowPopup(true)

  }

 return(
 <main>
   <div className="toDo"> {text}
     <div className="icons">
       <FaEdit className="icon" onClick={updateTodo}/>
       <RxCross1 className="icon" onClick={deleteTodo} />
     </div>
   </div>
 </main>
 );
};

export default ToDo;